import React, { Component } from 'react'
import App, { Consumer } from '../components/App';
import Button from '../components/input/Button';
import Checkbox from '../components/input/Checkbox';
import Color from '../components/input/Color';
import Number from '../components/input/Number';
import Select from '../components/input/Select';

import ChordDiagram from '../components/ChordDiagram';
import FretBoard from '../components/FretBoard';

import '../styles/utils/flexbox.css';
import '../styles/pages/settings.css';
import '../styles/utils/card.css';

export default class SettingsPage extends Component {
  render() {
    return (
      <App path={this.props["*"]}>
        <Consumer>
          {({ settings, updateSetting, resetSettings, state, data }) => (
            <div className="row">
              <section className="card">
                <h3>Global Settings</h3>
                <Select
                  label="Hand"
                  value={settings.hand}
                  options={[{ label: 'Left', value: 'left' }, { label: 'Right', value: 'right' }]}
                  onChange={(value) => { updateSetting('hand', value); }}
                />
                <Color
                  label="String Color"
                  value={settings.stringColor}
                  onChange={(value) => { updateSetting('stringColor', value); }}
                />
                <Color
                  label="Fret Color"
                  value={settings.fretColor}
                  onChange={(value) => { updateSetting('fretColor', value); }}
                />
                <Color
                  label="Finger Color"
                  value={settings.fingerColor}
                  onChange={(value) => { updateSetting('fingerColor', value); }}
                />
                <Color
                  label="Finger Border Color"
                  value={settings.fingerBorderColor}
                  onChange={(value) => { updateSetting('fingerBorderColor', value); }}
                />
                <Color
                  label="Finger Text Color"
                  value={settings.fingerTextColor}
                  onChange={(value) => { updateSetting('fingerTextColor', value); }}
                />
                <Checkbox
                  label="Show Fret Marker Dots"
                  value={settings.showFretMarkers}
                  onChange={(value) => { updateSetting('showFretMarkers', value); }}

                />
                <Color
                  label="Fret Marker Dot Border Color"
                  value={settings.fretMarkerBorderColor}
                  onChange={(value) => { updateSetting('fretMarkerBorderColor', value); }}
                />
                <Color
                  label="Fret Marker Dot Color"
                  value={settings.fretMarkerColor}
                  onChange={(value) => { updateSetting('fretMarkerColor', value); }}
                />
                <Number
                  label="Fret Marker Dot Opacity"
                  value={settings.fretMarkerOpacity}
                  min={0}
                  max={1}
                  step={0.05}
                  onChange={(value) => { updateSetting('fretMarkerOpacity', value); }}
                />
                <Checkbox
                  label="Show finger number label"
                  value={settings.showFingerNumberLabel}
                  onChange={(value) => { updateSetting('showFingerNumberLabel', value); }}
                />
                <Button label="Reset All to Default" onClick={() => { resetSettings() }} />
              </section>
              
              <section className="card">
                <h3>Preview</h3>
                <FretBoard
                  chord={data.chords.find((n) => n.id === 'f-major')}
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
                <ChordDiagram 
                  chord={data.chords.find((n) => n.id === 'f-major')}
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
              </section>
            </div>
          )}
        </Consumer>
      </App>
    );
  }
}
