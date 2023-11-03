import React, { Component } from 'react';

class MyComponent extends Component {
  state = { user: 'neel' };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        user: 'neel face too much difficulties to learn mounting'
      });
    }, 5000);
  }

  render() {
    return (
      <div>
        <h1>Who is: {this.state.user}</h1>
      </div>
    );
  }
}

export default MyComponent;
