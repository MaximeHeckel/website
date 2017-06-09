import React, { Component } from 'react';

class MainTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDockerLink: true,
    }
  }

  onHover = () => {
    this.setState({
      showDockerLink: !this.state.showDockerLink,
    })
  }

  render () {
    return (
      <div>
          I’m a San Francisco
          based software engineer and space
          enthusiast, currently working at <div style={{ display: 'inline-block', width: '115px'}}>
          {
            this.state.showDockerLink ? (
            <a 
              onMouseOver={() => this.onHover()}
              href="https://www.docker.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docker
            </a>) :
            <a
              style={{ border: 'none', textAlign: 'center' }}
              href="https://www.docker.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div onMouseOut={() => this.onHover()}> 
                <span
                  role="img"
                  aria-labelledby=""
                  aria-label=""
                >
                  🐳
                </span>
              </div>
            </a>
          }</div>. I like playing
          with Golang, Node.JS, React, Redux and containers.
      </div>
    );
  }
} 

export default MainTitle;
