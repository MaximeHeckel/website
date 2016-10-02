import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Button,
} from '../';
import {
  openModal,
  closeModal,
} from '../../Landing/actions/creators';
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

  handleClick() {
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
          onClick={() => this.handleClick()}
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
          <img src="dist/img/logo.png" alt="logo" />
        </div>
        {maybeRenderContact}
      </div>
    );
  }
}

export default TopBar;
