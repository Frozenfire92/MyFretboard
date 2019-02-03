import React, { Component } from 'react'
import App, { Consumer } from '../components/App';
import ChordDiagram from '../components/ChordDiagram';

import '../styles/utils/card.css';
import '../styles/utils/flexbox.css';
import '../styles/pages/chords.css';

export default class ChordsPage extends Component {
  render() {
    return (
      <App path={this.props["*"]}>
        <Consumer>
          {({ settings, data, updateChord, state }) => {
            let chordDiagrams = data.chords.map(chord =>
              <div className="card" key={chord.id}>
                <h3>{chord.id}</h3>
                <ChordDiagram 
                  chord={chord}
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
              </div>
            );
            return (
              <div className="row flex-center">
                {chordDiagrams}
              </div>
            );
          }}
        </Consumer>
      </App>
    );
  }
}
