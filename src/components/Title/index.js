import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import css from './styles.css';

class Title extends Component {
  static propTypes = {
    text: PropTypes.node,
    invert: PropTypes.bool,
  };

  render() {
    const { text, invert } = this.props;
    return (
      <div className={
        `${css.title} ${invert ?
        css.blackTitle : css.whiteTitle}`
      }>
        {text}
      </div>
    );
  }
}

export default Title;
