import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import Button from '../Button';
import logo from './logo.png';
import {
  openModal,
  closeModal,
} from '../../App/actions/creators';
import css from './styles.css';

const dispatcher = {
  openModal,
  closeModal,
};

@connect(null, dispatcher)
class TopBar extends Component {
  static propTypes = {
    contact: PropTypes.bool,
    openModal: PropTypes.func,
    closeModal: PropTypes.func,
  };

  handleClickCV() {
    return this.props.openModal({
      type: 'cv',
      data: {},
    });
  }

  handleClickContact() {
    return this.props.openModal({
      type: 'contact',
      data: {
        title: 'Contact me',
        email: 'hello@maximeheckel.com',
      },
    });
  }

  renderContact() {
    return (
      <div className={css.contact}>
        <Button
          onClick={() => this.handleClickCV()}
          className={css.contactButton}
        >
          More
        </Button>
        <Button
          onClick={() => this.handleClickContact()}
          className={css.contactButton}
        >
          Contact Me
        </Button>
      </div>
    );
  }

  render() {
    const { contact } = this.props;

    const maybeRenderContact = contact ? this.renderContact() : null;

    return (
      <div className={css.topbar}>
        <div className={css.logo}>
          <img src={logo} alt="logo" />
        </div>
        {maybeRenderContact}
      </div>
    );
  }
}

export default TopBar;
