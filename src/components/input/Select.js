import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  static propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })),
    onChange: PropTypes.func
  }

  handleChange(event) {
    if (this.props.onChange) this.props.onChange(event.target.value);
  }

  render() {
    return (
      <label>
        <select value={this.props.value} onChange={(e) => {this.handleChange(e);}} >
          {this.props.options.map((n) => (<option key={n.value} value={n.value}>{n.label}</option>))}
        </select>
        {this.props.label}
      </label>
    );
  }
}

export default Select;
