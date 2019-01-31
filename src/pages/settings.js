import React, { Component } from 'react'
import App, { Consumer } from '../components/App';
import Button from '../components/input/Button';
import Checkbox from '../components/input/Checkbox';
import Color from '../components/input/Color';
import Number from '../components/input/Number';
import Select from '../components/input/Select';

export default class SettingsPage extends Component {
  render() {
    return (
      <App>
        <Consumer>
          {({ settings, updateSetting, resetSettings }) => (
            <>
              <h2>Settings</h2>
              <section>
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
            </>
          )}
        </Consumer>
      </App>
    );
  }
}
