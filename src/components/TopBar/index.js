import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import Button from '../Button';
import logo from './logo.png';
import { email } from '../../App/config';
import css from './styles.css';

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
        email,
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
