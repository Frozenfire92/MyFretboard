import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Color extends Component {
  static propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func
  }

  handleChange(event) {
    if (this.props.onChange) this.props.onChange(event.target.value);
  }

  render() {
    return (
      <label>
        <input type="color" value={this.props.value} onChange={(e) => { this.handleChange(e); }} />
        &nbsp;{this.props.label}
      </label>
    );
  }
}

export default Color;
