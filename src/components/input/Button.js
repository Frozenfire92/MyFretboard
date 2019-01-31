import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Color extends Component {
  static propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func
  }

  handleClick() {
    if (this.props.onClick) this.props.onClick();
  }

  render() {
    return (
      <button onClick={() => { this.handleClick(); }}>{this.props.label}</button>
    );
  }
}

export default Color;
