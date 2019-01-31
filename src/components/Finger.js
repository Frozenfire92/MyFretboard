import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Finger extends Component {
  static propTypes = {
    cx: PropTypes.number,
    cy: PropTypes.number,
    r: PropTypes.number,
    text: PropTypes.string,
    textColor: PropTypes.string,
    fill: PropTypes.string,
    stroke: PropTypes.string
  }

  static defaultProps = {
    fill: '#000000',
    stroke: '#666666',
    textColor: '#FFFFFF'
  }

  render() {
    const t = this.props.text
      ? (
        <text
          className="finger-label"
          x={this.props.cx}
          y={this.props.cy}
          dy="6"
          textAnchor="middle"
          strokeWidth="0.3"
          fontSize="20"
          fill={this.props.textColor}
        >
          {this.props.text}
        </text>
      )
      : false;

    return (
      <g className="finger">
        <circle
          cx={this.props.cx}
          cy={this.props.cy}
          r={this.props.r}
          fill={this.props.fill}
          stroke={this.props.stroke}
          strokeWidth="3"
        />
        {t}
      </g>
    );
  }
}

export default Finger;
