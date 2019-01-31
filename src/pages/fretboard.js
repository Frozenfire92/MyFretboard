import React, { Component } from 'react';
import App, { Consumer } from '../components/App';
import FretBoard from '../components/FretBoard';
import Select from '../components/input/Select';

export default class FretboardPage extends Component {
  render() {
    return (
      <App>
        <Consumer>
          {({ settings, data, updateChord, state }) => {
            return (
              <>
                <h2>Fretboard</h2>
                <Select
                  label="Chord"
                  value={state.currentChord.id}
                  options={data.chordOptions}
                  onChange={(value) => { updateChord(value); }}
                />
                <FretBoard
                  chord={state.currentChord}
                  hand={settings.hand}
                  stringColor={settings.stringColor}
                  fretColor={settings.fretColor}
                  fingerColor={settings.fingerColor}
                  fingerBorderColor={settings.fingerBorderColor}
                  fingerTextColor={settings.fingerTextColor}
                  fretMarkerColor={settings.fretMarkerColor}
                  fretMarkerBorderColor={settings.fretMarkerBorderColor}
                  fretMarkerOpacity={settings.fretMarkerOpacity}
                  showFingerNumberLabel={settings.showFingerNumberLabel}
                  showFretMarkers={settings.showFretMarkers}
                />
              </>
            )
          }}
        </Consumer>
      </App>
    );
  }
}
