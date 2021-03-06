import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import TopBar from '../components/TopBar';
import Title from '../components/Title';
import Button from '../components/Button';
import {
  initTitle,
  email,
  socialLinks,
} from './config';
import {
  openModal,
  closeModal,
} from './actions/creators';
import PromptDispatcher from './components/PromptDispatcher';
import LinkList from './components/LinkList';
import MainTitle from './components/MainTitle';
import css from './styles.css';


function mapStateToProps({ landing }) {
  const { modal } = landing;
  return {
    modal,
  };
}

const dispatcher = {
  openModal,
  closeModal,
}

export class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    modal: PropTypes.array,
  }

  handleClickCV() {
    return this.props.openModal({
      type: 'cv',
      data: {},
    });
  }

  handleClickContact() {
    return this.props.openModal({
      type: 'contact',
      data: {
        title: 'Contact me',
        email,
      },
    });
  }

  render() {
    return (
      <div id="main-layout">
        <TopBar
          buttons={
            [(<Button
              key="more-button"
              onClick={() => this.handleClickCV()}
              className={css.contactButton}
            >
              More
            </Button>),
            (<Button
              key="contact-button"
              onClick={() => this.handleClickContact()}
              className={css.contactButton}
            >
              Contact Me
            </Button>)]
          }
        />
        <div className={css.landing}>
          <div className={css.subtitle}>{initTitle}</div>
          <Title text={<MainTitle />} />
          <LinkList links={socialLinks}/>
        </div>
        {!!this.props.modal && <PromptDispatcher prompt={this.props.modal} />}
      </div>
    );
  }
}

export default connect(mapStateToProps, dispatcher)(App);
