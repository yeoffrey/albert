import React, { Component } from 'react'
import CytoscapeComponent from 'react-cytoscapejs'
import Cytoscape from 'cytoscape';
import options from './Layout.js';
import data from './Elements.js';
import COSEBilkent from 'cytoscape-cose-bilkent';
//import styles from './Styles.js';

// Use fcose.
Cytoscape.use(COSEBilkent);

export default class App extends Component {

  // After component successfully mounts, we can all cy.
  componentDidMount = () => {
    this.setUpListeners()
  }

  // All Listenners.
  setUpListeners = () => {}
  
  // Render out.
  render() {
    return(
      <div>
        <CytoscapeComponent
            elements={data}
            style={ {width: window.innerWidth - 100, height: window.innerHeight - 100} }
            layout={options}
            cy={(cy) => { this.cy = cy }}
        />
      </div>
    )
  }
}