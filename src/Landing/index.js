import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  TopBar,
  Title,
} from '../components';
import PromptDispatcher from './components/PromptDispatcher';
import css from './styles.css';

const title = 'Hi, I\'m Maxime';

const mainTitle = `I’m a San Francisco
        based software engineer and space
enthusiast, currently working at Docker. I like playing
with Golang, Node.JS, React, Redux and containers.`;

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
    return (
      <div id="main-layout">
        <TopBar contact />
        <div className={css.landing}>
          <div className={css.subtitle}>{title}</div>
          <Title text={mainTitle} />
        </div>
        {!!this.props.modal && <PromptDispatcher prompt={this.props.modal} />}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Landing);
