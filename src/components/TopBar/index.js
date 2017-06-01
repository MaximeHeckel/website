import React, { Component } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import logo from './logo.png';
import css from './styles.css';

class TopBar extends Component {
  static propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.node),
    logo: PropTypes.bool,
  };

  renderButtons() {
    const { buttons } = this.props;
    return (
      <div className={css.contact}>
        {
          buttons.map((button) => button)
        }
      </div>
    );
  }

  render() {
    const { logo } = this.props;
    return (
      <div className={css.topbar}>
        {
          logo ?
          (
            <div className={css.logo}>
              <img src={logo} alt="logo" />
            </div>
          ): null
        }
        {this.renderButtons()}
      </div>
    );
  }
}

export default TopBar;
