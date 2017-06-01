/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import Typist from 'react-typist';
import Modal from '../../../components/Modal';
import Title from '../../../components/Title';
import Button from '../../../components/Button';
import {
  closeModal,
} from '../../actions/creators';
import {
  dockerCmd,
} from '../../config';
import css from './styles.css';

export class ThankyouModal extends Component {
  static propTypes = {
    closeModal: PropTypes.func,
  };

  handleCancel = () => {
    this.props.closeModal();
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
      <Modal isOpen>
        <div className={css.modalContent}>
          <Title text="More about me" invert />
          <div className={css.content}>
            <div className={css.dockerContent}>
              <div className={css.terminalHeader}>
                <div className={css.redDot} />
                <div className={css.yellowDot} />
                <div className={css.greenDot} />
              </div>
              <div className={css.cmd}>
                <Typist cursor={cursor}>
                  {dockerCmd}
                  <br />
                  <br />
                  <br />
                  <br />
                  /***
                  <br />
                  <br />
                  Or find me on LinkedIn
                  <br />
                  at <a
                    href="https://linkedin.com/in/heckelmaxime"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://linkedin.com/in/heckelmaxime
                  </a>
                  <br />
                  <br />
                  ***/
                </Typist>
              </div>
            </div>
          </div>
        </div>
        <div className={css.close}>
          <Button
            className={css.closeButton}
            onClick={() => this.handleCancel()}
          >
            Close
          </Button>
        </div>
      </Modal>
    );
  }
}

export default connect(null, {
  closeModal,
})(ThankyouModal);
