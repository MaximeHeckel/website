import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TransitionGroup from 'react-addons-css-transition-group';
import styles from './styles.css';
import transitions from './transitions.css';
import classnames from 'classnames';

const {
  any,
  string,
  bool,
  func,
  object,
} = PropTypes;

export default class Modal extends Component {
  static propTypes = {
    className: string,
    children: any,
    isOpen: bool,
    onCloseCall: func,
    style: object,
  }

  render() {
    const {
      className,
      children,
      isOpen,
    } = this.props;

    const modalClass = classnames({
      [className]: !!className,
      [styles.modalClass]: true,
    });

    if (isOpen) {
      return (
        <TransitionGroup
          transitionName={transitions}
          transitionAppearTimeout={500}
          transitionAppear
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <div className={modalClass}>
            {children}
          </div>
        </TransitionGroup>
      );
    }
    return (
      <TransitionGroup
        transitionName={transitions}
        transitionAppearTimeout={500}
        transitionAppear
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      />
    );
  }
}
