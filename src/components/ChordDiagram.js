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
        isChordDiagram={true}
        chord={this.props.chord}
        fretCount={6}
        width={width}
        isVertical={isVertical}
        startAtBarOrMin={true}
        displayLabelInBar={this.props.showFretBarLabel}
        displayLabelAtFret={true}
        hand={this.props.hand}
        stringColor={this.props.stringColor}
        fretColor={this.props.fretColor}
        fingerColor={this.props.fingerColor}
        fingerBorderColor={this.props.fingerBorderColor}
        fingerTextColor={this.props.fingerTextColor}
        fretMarkerColor={this.props.fretMarkerColor}
        fretMarkerBorderColor={this.props.fretMarkerBorderColor}
        fretMarkerOpacity={this.props.fretMarkerOpacity}
        showFingerNumberLabel={this.props.showFingerNumberLabel}
        showFretMarkers={this.props.showFretMarkers}
      />
    );
  }
}
