import React, { Component, PropTypes } from 'react';
import css from './styles.css';

class Title extends Component {
  static propTypes = {
    text: PropTypes.string,
  };

  render() {
    const { text } = this.props;
    return (
      <div className={css.title}>{text}</div>
    );
  }
}

export default Title;
