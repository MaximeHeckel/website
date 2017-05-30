import React, { Component } from 'react';
import {
  socialLinks,
} from '../../config';
import css from './styles.css';

class LinkList extends Component {
  render() {
    return (
      <div className={css.list}>
        {
          Object.keys(socialLinks).map((value) => {
            return (
              <a
                className={`${css.item} ${css[value]}`}
                href={socialLinks[value]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {value}
              </a>
            )
          }) 
        }
      </div>
    );
  }
}

export default LinkList;
