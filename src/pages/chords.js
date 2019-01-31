import React, { Component } from 'react'
import App, { Consumer } from '../components/App';
import ChordDiagram from '../components/ChordDiagram';

export default class ChordsPage extends Component {
  render() {
    return (
      <App>
        <Consumer>
          {({ settings, data, updateChord, state }) => {
            return (
              <>
                <h2>Chords</h2>
                <ChordDiagram />
              </>
            );
          }}
        </Consumer>
      </App>
    );
  }
}
