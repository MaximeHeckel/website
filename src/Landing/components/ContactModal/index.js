import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Modal,
  Title,
} from '../../../components';
import {
  closeModal,
} from '../../actions/creators';

export class ContactModal extends Component {
  static propTypes = {
    title: PropTypes.string,
    email: PropTypes.string,
    closeModal: PropTypes.func,
  }

  constructor(...args) {
    super(...args);
    this.handleConfirm = ::this.handleConfirm;
    this.handleCancel = ::this.handleCancel;
  }

  handleConfirm() {
    console.log('SENDING EMAIL TO ' + this.props.email);
  }

  handleCancel() {
    this.props.closeModal();
  }

  render() {
    return (
      <Modal isOpen onCloseCall={this.handleCancel}>
        <Title text={this.props.title} />
      </Modal>
    );
  }
}

export default connect(null, {
  closeModal,
})(ContactModal);
