import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TopBar from '../components/TopBar';
import Title from '../components/Title';
import {
  mainTitle,
  initTitle,
} from './config';
import PromptDispatcher from './components/PromptDispatcher';
import LinkList from './components/LinkList';
import css from './styles.css';


function mapStateToProps({ landing }) {
  const { modal } = landing;
  return {
    modal,
  };
}

@connect(mapStateToProps, null)
export default class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    modal: PropTypes.array,
  }

  render() {
    return (
      <div id="main-layout">
        <TopBar contact />
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

