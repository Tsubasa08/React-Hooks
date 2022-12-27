import * as React from 'react';

export default class Counter extends React.Component<{}, { count: number }> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.getElementById('class').textContent = this.state.count;
  }
  componentDidUpdate() {
    document.getElementById('class').textContent = this.state.count;
  }

  render() {
    return (
      <div>
        <h2>Class</h2>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
        <div id="class"></div>
      </div>
    );
  }
}
