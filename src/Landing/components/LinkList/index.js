import React, { Component } from 'react';
import {
  socialLinks,
} from '../../config';
import css from './styles.css';

class LinkList extends Component {
  render() {
    return (
      <div className={css.list}>
        <a
          className={`${css.item} ${css.twitter}`}
          href={socialLinks.twitter}
          target="_blank"
        >
          Twitter
        </a>
        <a
          className={`${css.item} ${css.medium}`}
          href={socialLinks.medium}
          target="_blank"
        >
          Medium
        </a>
        <a
          className={`${css.item} ${css.instagram}`}
          href={socialLinks.instagram}
          target="_blank"
        >
          Instagram
        </a>
        <a
          className={`${css.item} ${css.github}`}
          href={socialLinks.github}
          target="_blank"
        >
          Github
        </a>
      </div>
    );
  }
}

export default LinkList;
