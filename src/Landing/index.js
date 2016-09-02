import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  TopBar,
} from '../components';
import { helloworldrequest } from './actions/creators';
import css from './styles.css';

const title = 'Hi, I\'m Maxime';

const mainTitle = `I’m a San Francisco
        based software engineer and space
enthusiast, currently working at Docker. I like playing
with Golang, Node.JS, React, Redux and containers.`;

class Landing extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(helloworldrequest()).then((payload) => {
      console.log(payload);
    });
  }

  render() {
    return (
      <div>
        <TopBar contact />
        <div className={css.landing}>
          <div className={css.subtitle}>{title}</div>
          <div className={css.title}>{mainTitle}</div>
        </div>
      </div>
    );
  }
}

export default connect()(Landing);
