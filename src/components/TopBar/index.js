import React, { Component, PropTypes } from 'react';
import {
  Button,
} from '../';
import css from './styles.css';

class TopBar extends Component {
  static propTypes = {
    contact: PropTypes.bool,
  };

  handleClick() {
    console.log('CLICK');
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
