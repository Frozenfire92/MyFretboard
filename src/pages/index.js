import React from "react";
import { graphql } from 'gatsby'
// import styles from '../styles/pages/index.module.scss';
import FretBoard from '../components/FretBoard';
import App from '../components/App';

export const query = graphql`
  query {
    site { siteMetadata { description } }
    chord:chordsJson(id:{eq:"e-major"}) {
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
`;

export default (props) => (
  <App path={props["*"]}>
    <p>{props.data.site.siteMetadata.description}</p>
    <FretBoard chord={props.data.chord} />
  </App>
);
