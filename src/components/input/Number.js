import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Color extends Component {
  static propTypes = {
    value: PropTypes.any,
    label: PropTypes.string,
    step: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func
  }

  handleChange(event) {
    let value = event.target.value;
    if (this.props.min && value < this.props.min) value = this.props.min;
    if (this.props.max && value > this.props.max) value = this.props.max;
    if (this.props.onChange) this.props.onChange(value);
  }

  render() {
    return (
      <label>
        <input
          type="number"
          step={this.props.step}
          min={this.props.min}
          max={this.props.max}
          value={this.props.value}
          onChange={(e) => { this.handleChange(e); }}
        />
        &nbsp;{this.props.label}
      </label>
    );
  }
}

export default Color;
