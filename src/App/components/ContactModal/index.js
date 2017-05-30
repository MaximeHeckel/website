import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import Modal from '../../../components/Modal';
import Title from '../../../components/Title';
import Button from '../../../components/Button';
import {
  openModal,
  closeModal,
  contactrequest,
} from '../../actions/creators';
import css from './styles.css';

export class ContactModal extends Component {
  static propTypes = {
    title: PropTypes.string,
    email: PropTypes.string,
    openModal: PropTypes.func,
    closeModal: PropTypes.func,
    contactrequest: PropTypes.func,
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

  handleSubmit = () => {
    const { email, subject, text } = this.state;
    const data = {
      email,
      subject,
      text,
    };

    return this.props.contactrequest(data).then(({ value }) => {
      if (value.status < 400) {
        this.props.closeModal();
        this.props.openModal({
          type: 'thankyou',
          data: {},
        });
      }
    });
  }

  handleCancel = () => {
    this.props.closeModal();
  }

  render() {
    return (
      <Modal isOpen >
        <div className={css.modalContent}>
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
              rows="9"
              className={css.input}
              onChange={this.onChangeInput.bind(this, 'text')}
              placeholder="Message"
            />
          </div>
        </div>
        <div className={css.submit}>
          <Button
            onClick={() => this.handleSubmit()}
            className={css.submitButton}
          >
            Submit
          </Button>
          <Button
            onClick={() => this.handleCancel()}
            className={css.closeButton}
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
  openModal,
  contactrequest,
})(ContactModal);
