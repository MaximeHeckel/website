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
            <a onMouseOver={() => this.onHover()} href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
              Docker
            </a>) :
            <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
              <span
                aria-label=""
                aria-labelledby=""
                onMouseOut={() => this.onHover()}
                role="img"
              > 
                🐳🐳🐳
              </span>
            </a>
          }</div>. I like playing
          with Golang, Node.JS, React, Redux and containers.
      </div>
    );
  }
} 

export default MainTitle;
