import React, { Component } from 'react';
import css from './styles.css';

const title = 'Hi, I\'m Maxime';

const mainTitle = `I’m a San Francisco
        based software engineer and space
enthusiast, currently working at Docker. I like playing
with Golang, Node.JS, React, Redux and containers.`;

class Landing extends Component {
  render() {
    return (
      <div className={css.landing}>
        <div className={css.subtitle}>{title}</div>
        <div className={css.title}>{mainTitle}</div>
      </div>
    );
  }
}

export default Landing;
