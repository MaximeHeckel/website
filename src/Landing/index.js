import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Typist from 'react-typist';
import {
  TopBar,
  Title,
} from '../components';
import {
  mainTitle,
  initTitle,
  dockerCmd,
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

class Landing extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    modal: PropTypes.array,
  }

  render() {
    const cursor = {
      show: true,
      blink: true,
      element: '|',
      hideWhenDone: true,
      hideWhenDoneDelay: 1000,
    };

    return (
      <div id="main-layout">
        <TopBar contact />
        <div className={css.landing}>
          <div className={css.subtitle}>{initTitle}</div>
          <Title text={mainTitle} />
          <LinkList />
          <div className={css.dockerContent}>
            <div className={css.cmd}>
              <Typist cursor={cursor}>
                {dockerCmd}
              </Typist>
            </div>
          </div>
        </div>
        {!!this.props.modal && <PromptDispatcher prompt={this.props.modal} />}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Landing);
