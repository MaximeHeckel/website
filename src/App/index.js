import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import TopBar from '../components/TopBar';
import Title from '../components/Title';
import {
  mainTitle,
  initTitle,
} from './config';
import {
  openModal,
  closeModal,
} from './actions/creators';
import PromptDispatcher from './components/PromptDispatcher';
import LinkList from './components/LinkList';
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

  render() {
    return (
      <div id="main-layout">
        <TopBar
          contact
          openModal={this.props.openModal}
          closeModal={this.props.closeModal}
        />
        <div className={css.landing}>
          <div className={css.subtitle}>{initTitle}</div>
          <Title text={mainTitle} />
          <LinkList />
        </div>
        {!!this.props.modal && <PromptDispatcher prompt={this.props.modal} />}
      </div>
    );
  }
}

export default connect(mapStateToProps, dispatcher)(App);
