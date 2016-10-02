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

export class ContactModal extends Component {
  static propTypes = {
    title: PropTypes.string,
    email: PropTypes.string,
    closeModal: PropTypes.func,
  }

  constructor(...args) {
    super(...args);
    this.handleSubmit = ::this.handleSubmit;
    this.handleCancel = ::this.handleCancel;
  }

  state = {
    email: '',
    subject: '',
    text: '',
  };

  onChangeInput(field, e) {
    if (field === 'email') {
      this.setState({ email: e.target.value });
    } else if (field === 'subject') {
      this.setState({ subject: e.target.value });
    } else {
      this.setState({ text: e.target.value });
    }
    return;
  }

  handleSubmit() {
    console.log('SENDING EMAIL TO ' + this.props.email);
  }

  handleCancel() {
    this.props.closeModal();
  }

  render() {
    return (
      <Modal isOpen onCloseCall={this.handleCancel}>
        <Title text={this.props.title} />
        <div className={css.form}>
          <input
            className={css.input}
            onChange={this.onChangeInput.bind(this, 'email')}
            value={this.state.email}
            placeholder="Email"
          />
          <input
            className={css.input}
            onChange={this.onChangeInput.bind(this, 'subject')}
            value={this.state.subject}
            placeholder="Subject"
          />
          <textarea
            rows="10"
            className={css.input}
            onChange={this.onChangeInput.bind(this, 'text')}
            placeholder="Message"
          />
        </div>
        <div className={css.submit}>
          <Button
            onClick={() => this.handleSubmit()}
            className={css.submitButton}
          >
            Submit
          </Button>
        </div>
      </Modal>
    );
  }
}

export default connect(null, {
  closeModal,
})(ContactModal);
