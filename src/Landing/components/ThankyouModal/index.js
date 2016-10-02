import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Modal,
  Title,
  Button,
} from '../../../components';
import {
  closeModal,
} from '../../actions/creators';
import css from './styles.css';

export class ThankyouModal extends Component {
  static propTypes = {
    closeModal: PropTypes.func,
  };

  constructor(...args) {
    super(...args);
    this.handleCancel = ::this.handleCancel;
  }

  handleCancel() {
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
