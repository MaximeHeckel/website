import React, { Component, PropTypes } from 'react';
import styles from './styles.css';
import ReactModal from 'react-modal';
import classnames from 'classnames';
import merge from 'lodash/merge';

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
      onCloseCall,
      style,
    } = this.props;
    const modalStyles = merge({
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, .3)',
        zIndex: '1000',
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center',
        overflowX: 'hidden',
        overflowY: 'auto',
        height: '100%',
      },
      content: {
        borderRadius: '2px',
        position: 'relative',
        bottom: 'null',
        top: '100px',
        width: '740px',
        height: '500px',
        overflow: 'visible',
        padding: 'null',
        backgroundColor: '#ffffff',
        outline: 'none',
      },
    }, style);

    const modalClass = classnames({
      [className]: !!className,
      [styles.modalClass]: true,
    });

    return (
      <ReactModal
        className={modalClass}
        style={ modalStyles }
        isOpen={isOpen}
        onRequestClose={onCloseCall}
      >
        { children }
      </ReactModal>
    );
  }
}
