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
      <div>
        <h4 className={css.title}>{title}</h4>
        <h1 className={css.title}>{mainTitle}</h1>
      </div>
    );
  }
}

export default Landing;
