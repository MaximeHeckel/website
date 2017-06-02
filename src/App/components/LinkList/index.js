import React, { Component } from 'react';
import css from './styles.css';

class LinkList extends Component {
  render() {
    const { links } = this.props;

    return (
      <div className={css.list}>
        {
          links ?
          Object.keys(links).map((value, i) => {
            return (
              <a
                key={`${value}-${i}`}
                className={`${css.item} ${css[value]}`}
                href={links[value]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {value}
              </a>
            )
          }) : null 
        }
      </div>
    );
  }
}

export default LinkList;
