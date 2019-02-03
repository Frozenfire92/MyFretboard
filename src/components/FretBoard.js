import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Finger from './Finger';

class FretBoard extends Component {
  static propTypes = {
    padding: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    stringCount: PropTypes.number,
    barWidth: PropTypes.number,
    fretCount: PropTypes.number,
    chord: PropTypes.object,
    radius: PropTypes.number,
    stringWidth: PropTypes.number,
    isVertical: PropTypes.bool,
    startAtBarOrMin: PropTypes.bool, // used for when you are displaying a chord and want the first fret to be the bar or a min threshold note
    displayLabelInBar: PropTypes.bool,
    displayLabelAtFret: PropTypes.bool,
    hand: PropTypes.string,
    stringColor: PropTypes.string,
    fretColor: PropTypes.string,
    fingerColor: PropTypes.string,
    fingerBorderColor: PropTypes.string,
    fingerTextColor: PropTypes.string,
    fretMarkerColor: PropTypes.string,
    fretMarkerBorderColor: PropTypes.string,
    fretMarkerOpacity: PropTypes.any, // string/num
    showFingerNumberLabel: PropTypes.bool,
    showFretMarkers: PropTypes.bool,
    isChordDiagram: PropTypes.bool
  }

  static defaultProps = {
    stringCount: 6,
    fretCount: 16,
    padding: 35,
    width: 1000,
    height: 300,
    barWidth: 12,
    radius: 20,
    stringWidth: 4,
    isVertical: false,
    startAtBarOrMin: false,
    displayLabelInBar: false,
    displayLabelAtFret: false,
    hand: 'right',
    stringColor: '#000000',
    fretColor: '#000000',
    fingerColor: '#000000',
    fingerBorderColor: '#666666',
    fingerTextColor: '#FFFFFF',
    fretMarkerColor: '#000000',
    fretMarkerBordercolor: '#666666',
    fretMarkerOpacity: 0.3,
    showFingerNumberLabel: true,
    showFretMarkers: true,
    isChordDiagram: false
  }

  minX() { return this.props.padding; }
  maxX() { return this.props.width - this.props.padding; }

  minY() { return this.props.padding; }
  maxY() { return this.props.height - this.props.padding; }

  minFret() {
    if (!this.props.chord) return 0;

    let min = this.props.chord.placements
      .filter(n => n !== 'x' && n !== 0)
      .reduce((prev, cur) => prev < cur ? prev : cur);
    // this.props.chord.placements // get the min non 0
    if (this.props.chord.bar && this.props.chord.bar.fret < min) {
      min = this.props.chord.bar.fret;
    }
    return min;
  }

  offset() {
    if (this.props.chord && this.props.chord.bar && this.props.chord.bar.fret > 1) {
      return this.props.startAtBarOrMin
        ? this.props.chord.bar.fret - 1
        : 0;
    }
    else {
      return this.props.startAtBarOrMin
        ? this.minFret() >= 3
          ? this.minFret() - 1
          : 0
        : 0;
    }
  }

  stringElements(offset) {
    const a = [];
    const totalDistance = this.maxY() - this.minY();

    for (let i = 0; i < this.props.stringCount; i++) {
      a.push(
        ((i / (this.props.stringCount - 1)) * totalDistance) + this.props.padding,
      );
    }

    let x1 = this.minX() - ((this.props.barWidth / 2) - 2);
    let y1 = this.minY() - ((this.props.barWidth / 2) - 2);
    // magic number to account for the first fret not being thick because of offset
    if (offset > 0) {
      y1 = y1 + 4; // vertical
      x1 = x1 + 4; // horizontal
    }
    let x2 = this.maxX();

    let elCreation = (position, i) => (
      <line
        key={`string-${i + 1}`}
        className="string"
        x1={this.props.isVertical ? position : x1}
        y1={this.props.isVertical ? y1 : position}
        x2={this.props.isVertical ? position : x2}
        y2={this.props.isVertical ? x2 : position}
        stroke={this.props.stringColor}
        strokeWidth={this.props.stringWidth}
      />
    );

    return this.props.isVertical
      ? a.reverse().map(elCreation)
      : a.map(elCreation);
  }

  fretElements(offset) {
    const a = [];
    const totalDistance = this.maxX() - this.minX();

    for (let i = 0; i < this.props.fretCount; i++) {
      a.push(
        ((i / (this.props.fretCount - 1)) * totalDistance) + this.props.padding,
      );
    }

    let x1 = this.minX() - (this.props.stringWidth / 2);
    const y1 = this.minY() - (this.props.stringWidth / 2);
    const y2 = this.maxY() + (this.props.stringWidth / 2);
    return a.map((position, i) => (
      <line
        key={`fret-${i}`}
        className="fret"
        x1={this.props.isVertical ? x1 : position}
        y1={this.props.isVertical ? position : y1}
        x2={this.props.isVertical ? y2 : position}
        y2={this.props.isVertical ? position : y2}
        strokeWidth={i === 0 && offset === 0 ? 12 : 2}
        stroke={this.props.fretColor}
      />
    ));
  }

  fretMarkerElements(stringElements, fretElements, offset) {
    const r = 15;
    const fretPositions = [3, 5, 7, 9, 12, 15, 17, 19, 21, 24];
    const cutoff = fretElements.length - 1;

    const cy = this.props.isVertical
      ? (stringElements[2].props.x1 + stringElements[3].props.x1) / 2
      : (stringElements[2].props.y1 + stringElements[3].props.y1) / 2;

    if (!this.props.showFretMarkers) return null;

    return fretPositions
      .map(n => n - offset)
      .filter(n => n <= cutoff && n > 0)
      .map((position) => {
        return (
          <circle
            key={`fret-marker-${position}`}
            className="fret-marker"
            cx={this.props.isVertical
              ? cy
              : (fretElements[position - 1].props.x1 + fretElements[position].props.x1) / 2
            }
            cy={this.props.isVertical
              ? (fretElements[position - 1].props.y1 + fretElements[position].props.y1) / 2
              : cy
            }
            r={r}
            fill={this.props.fretMarkerColor}
            stroke={this.props.fretMarkerBorderColor}
            strokeWidth="3"
            opacity={this.props.fretMarkerOpacity}
          />
        );
      });
  }

  barElement(stringElements, fretElements, offset) {
    if (this.props.chord && this.props.chord.bar) {
      let fret = this.props.chord.bar.fret - offset - 1;
      const radius = this.props.radius;
      let halfBarWidth = (this.props.barWidth / 2);
      const x = this.props.isVertical
        ? stringElements[this.props.chord.bar.end - 1].props.x1 - this.props.radius + 5
        : fretElements[fret].props.x1 + this.props.radius - halfBarWidth;
      const y = this.props.isVertical
        ? fretElements[fret].props.y1 + radius - this.props.barWidth
        : stringElements[this.props.chord.bar.start - 1].props.y1 - radius + 5;
      const width = radius * 2;
      const height = this.props.isVertical
        ? (fretElements[this.props.chord.bar.end - 1].props.y1 - fretElements[this.props.chord.bar.start - 1].props.y1) - 5
        : (stringElements[this.props.chord.bar.end - 1].props.y1 - stringElements[this.props.chord.bar.start - 1].props.y1) + width;
      return (
        <>
          <rect
            className="finger-bar"
            x={x}
            y={y}
            width={this.props.isVertical ? height - 5 : width}
            height={this.props.isVertical ? width : height}
            rx="25"
            ry="25"
            fill="#000000"
            stroke="#666666"
            strokeWidth="3"
          />
          {
            this.props.displayLabelInBar
              ? (
                <text
                  className="finger-bar-label"
                  x={this.props.isVertical
                    ? x + (height / 2)
                    : (y + (height / 2)) * -1
                  }
                  y={this.props.isVertical
                    ? (y + (width / 2))
                    : x + 20
                  }
                  dy="6"
                  textAnchor="middle"
                  strokeWidth="0.3"
                  fontSize="20"
                  fill="#FFFFFF"
                  stroke="#FFFFFF"
                  letterSpacing="3"
                  transform={this.props.isVertical ? null : 'rotate(-90,0,0)'}
                >
                  {`Fret ${this.props.chord.bar.fret}`}
                </text>
              )
              : null
          }

        </>
      );
    }
  }

  fingerElements(stringElements, fretElements, offset) {
    if (this.props.chord && this.props.chord.fingerings && this.props.chord.placements) {
      const radius = this.props.radius;
      const fretOffset = this.props.isVertical
        ? (stringElements[1].props.x1 - stringElements[0].props.x1) / 2
        : (fretElements[1].props.x1 - fretElements[0].props.x1) / 2;
      const placements = this.props.chord.placements.map(n => n - offset);
      return placements
        .map((n, i) => ({ n, i })) // save the original index
        .filter(n => n.n > 0) // filter any that aren't placed
        .map((placement) => ({
          cx: this.props.isVertical
            ? stringElements[placement.i].props.x1
            : fretElements[placement.n].props.x1 - fretOffset,
          cy: this.props.isVertical
            ? fretElements[placement.n].props.y1 + fretOffset - 5
            : stringElements[placement.i].props.y1,
          r: radius,
          finger: this.props.chord.fingerings[placement.i]
        }))
        .map((n) => (
          <Finger
            key={`finger-${n.finger}`}
            text={this.props.showFingerNumberLabel ? n.finger.toString() : null}
            fill={this.props.fingerColor}
            stroke={this.props.fingerBorderColor}
            textColor={this.props.fingerTextColor}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
          />
        ));
    }
  }

  labelElements(stringElements) {
    if (this.props.chord && this.props.chord.placements) {
      return this.props.chord.placements
        .map((n, i) => ({ n, i }))
        .filter(n => n.n === null)
        .map(n => ({
          x: this.props.isVertical
            ? stringElements[n.i].props.x1
            : 15,
          y: this.props.isVertical
            ? 15
            : stringElements[n.i].props.y1 + 5
        }))
        .map((n, i) => (
          <text
            key={`label-${i}`}
            className="skipped-string"
            textAnchor="middle"
            strokeWidth="0.3"
            fontSize="20"
            fontFamily="monospace"
            x={n.x}
            y={n.y}
          >
            x
          </text>
        ));
    }
  }

  noBarFretLabelElement(stringElements, fretElements, offset) {
    if (offset && this.props.displayLabelAtFret && (!this.props.displayLabelInBar || !this.props.chord.bar)) {
      console.log('noBarFretLabelElement', this.props.chord.id, {stringElements, fretElements});
      return (
        <text
          className="fret-label"
          strokeWidth="0.3"
          fontSize="20"
          fontFamily="monospace"
          x={this.props.isVertical
            ? 0
            : ((fretElements[0].props.y1 + fretElements[1].props.y1) / 2) + 20
          }
          y={this.props.isVertical
            ? ((fretElements[0].props.y1 + fretElements[1].props.y1) / 2) + 7
            : stringElements[0].props.x1 - 15
          }
        >
          {`${offset + 1}f`}
        </text>
      );
    }
  }

  render() {
    let offset = this.offset();
    const stringElements = this.stringElements(offset);
    const fretElements = this.fretElements(offset);
    const fretMarkerElements = this.fretMarkerElements(stringElements, fretElements, offset);
    const barElement = this.barElement(stringElements, fretElements, offset);
    const fingerElements = this.fingerElements(stringElements, fretElements, offset);
    const labelElements = this.labelElements(stringElements);
    const noBarFretLabelElement = this.noBarFretLabelElement(stringElements, fretElements, offset);

    const width = this.props.isVertical ? this.props.height : this.props.width;
    const height = this.props.isVertical ? this.props.width : this.props.height;

    const className = `fret-board${this.props.isChordDiagram ? ' chord-diagram' : ''}`;

    return (
      <svg
        className={className}
        viewBox={`0 0 ${width} ${height}`}
      >
        {stringElements}
        {fretElements}
        {fretMarkerElements}
        {barElement}
        {fingerElements}
        {labelElements}
        {noBarFretLabelElement}
      </svg>
    );
  }
}

export default FretBoard;
