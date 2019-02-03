import React, { Component } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

import '../styles/utils/reset.css';
import '../styles/utils/global.css';
import '../styles/components/App.css';

const defaultSettings = {
  hand: 'right',
  stringColor: '#000000',
  fretColor: '#000000',
  fingerColor: '#000000',
  fingerBorderColor: '#666666',
  fingerTextColor: '#FFFFFF',
  fretMarkerColor: '#333333',
  fretMarkerBorderColor: '#000000',
  fretMarkerOpacity: 0.1,

  showFingerNumberLabel: true,
  showFretMarkers: true,
  showFretBarLabel: true,

  chordDiagramOrientation: 'vertical',
};

const context = React.createContext({
  settings: { },
  data: {},
  state: {},
  updateSetting: (kay, value) => { },
  resetSettings: () => { },
  updateChord: (id) => { }
});

export const Provider = context.Provider;
export const Consumer = context.Consumer;

const query = graphql`query { 
  site { siteMetadata { title } }
  allChordsJson {
    edges {
      node {
        id
        placements
        fingerings
        bar {
          start
          end
          fret
        }
        variations {
          placements
          fingerings
        }
      }
    }
  }
}`;

export default class App extends Component {
  constructor(props) {
    super(props);
    // TODO currentChord better
    this.state = Object.assign(
      {},
      { currentChord: { id: "a-major", placements: [0, 2, 2, 2, 0, null], fingerings: [0, 2, 1, 3, 0, 0] } },
      this.load()
    );
  }

  load() {
    console.log('loading state');
    try {
      let local = localStorage.getItem('app');
      if (!local) { 
        return { settings: defaultSettings };
      }
      else {
        return JSON.parse(local);
      }
    }
    catch {
      return { settings: defaultSettings };
    }
  }

  save() {
    console.log('saving state to local storage');
    try {
      let string = JSON.stringify(this.state);
      localStorage.setItem('app', string);
    }
    catch (error) {
      console.error('couldn\'t save', error);
    }
  }

  updateSetting(key, value) {
    console.log(`updating state { ${key}: ${value} }`);

    this.setState(
      (state) => { 
        let settings = Object.assign({}, state.settings, { [key] : value });
        console.log('new', settings);
        return Object.assign({}, state, { settings });
      },
      () => {
        this.save();
      }
    );
  }

  updateChord(chords, id) {
    this.setState({ currentChord: chords.find(n=>n.id === id) });
  }

  resetSettings() {
    console.log('resetting state');
    this.setState(
      { settings: defaultSettings },
      () => {
        this.save();
      }
    );
  }

  render() {
    return (
      <StaticQuery
        query={query}
        render={data =>
          <Provider value={{
            settings: this.state.settings,
            data: {
              chords: data.allChordsJson.edges.map((n) => n.node),
              chordOptions: data.allChordsJson.edges.map((n) => n.node).map(({ id }) => ({ label: id, value: id }))
            },
            state: {
              currentChord: this.state.currentChord
            },
            updateSetting: (key, value) => this.updateSetting(key, value),
            resetSettings: () => this.resetSettings(),
            updateChord: (id) => this.updateChord(data.allChordsJson.edges.map((n) => n.node), id)
          }}>
            <header>
              <h1>{data.site.siteMetadata.title}</h1>
              <nav>
                <Link to="/chords">Chords</Link>
                <Link to="/fretboard">Fretboard</Link>
                <Link to="/downloads">Downloads</Link>
                <Link to="/settings">Settings</Link>
              </nav>
            </header>
            <main className={this.props.path}>
              {this.props.children}
            </main>
          </Provider>
        }
      />
    );
  }
} 
