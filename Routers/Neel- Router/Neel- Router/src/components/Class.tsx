import React, { Component } from 'react'

export default class Class extends Component<{ names: string }> {
    render() {
      const { names } = this.props;
      return (
        <div>{names}, this is class component!</div>
      );
    }
  }