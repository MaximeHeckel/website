import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Modal from '../../../components/Modal';
import Title from '../../../components/Title';
import Button from '../../../components/Button';
import {
  closeModal,
} from '../../actions/creators';
import css from './styles.css';

export class ThankyouModal extends Component {
  static propTypes = {
    closeModal: PropTypes.func,
  };

  handleCancel = () => {
    this.props.closeModal();
  }

  render() {
    return (
      <Modal isOpen onCloseCall={this.handleCancel}>
        <div className={css.modalContent}>
          <div className={css.content}>
            <Title text="Thank you for contacting me!" />
            <div className={css.contactText}>
              I'll try to get back to you ASAP.
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
