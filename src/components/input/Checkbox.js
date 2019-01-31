import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  static propTypes = {
    value: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func
  }

  handleChange(event) {
    if (this.props.onChange) this.props.onChange(event.target.checked);
  }

  render() {
    return (
      <label>
        <input type="checkbox" checked={this.props.value} onChange={(e) => { this.handleChange(e); }} />
        {this.props.label}
      </label>
    );
  }
}

export default Checkbox;
