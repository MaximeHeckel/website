import React, { Component, PropTypes } from 'react';
import css from './styles.css';

class Button extends Component {
  static propTypes = {
    children: PropTypes.any,
    disabled: PropTypes.bool,
    inverted: PropTypes.bool,
    className: PropTypes.string,
  }

  render() {
    const { children, className } = this.props;
    const props = {
      ...this.props,
      className: `${className} ${css.button}`,
    };

    return (
      <button {...props}>{children}</button>
    );
  }
}

export default Button;
