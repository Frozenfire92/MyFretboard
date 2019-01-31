import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FretBoard from './FretBoard';

export default class ChordDiagram extends Component {
  static propTypes = {
    chord: PropTypes.object,
    chordDiagramOrientation: PropTypes.string,
    showFretBarLabel: PropTypes.bool
  }

  static defaultProps = {
    chordDiagramOrientation: 'vertical',
    showFretBarLabel: true
  }

  render() {
    let isVertical = this.props.chordDiagramOrientation === 'vertical';
    let width = isVertical
      ? 350
      : 400;
    return (
      <FretBoard
        chord={this.props.chord}
        fretCount={6}
        width={width}
        isVertical={isVertical}
        startAtBarOrMin={true}
        displayLabelInBar={this.props.showFretBarLabel}
        displayLabelAtFret={true}
      />
    );
  }
}
