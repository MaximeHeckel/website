import { PropTypes, Component } from 'react';

class App extends Component {
  static propTypes = {
    children: PropTypes.element,
  }

  render() {
    return this.props.children;
  }
}

export default App;
