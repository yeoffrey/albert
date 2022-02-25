import React, { Component } from 'react'
import CytoscapeComponent from 'react-cytoscapejs'
import Cytoscape from 'cytoscape';
import options from './Layout.js';
import data from './Elements.js';
import fcose from 'cytoscape-fcose';

Cytoscape.use( fcose );

export default class Demo extends Component {
  
  state = {
    w: 0,
    h: 0,
    elements: data,
    layout: options
  }

  componentDidMount = () => {
    this.setState({
      w: window.innerWeight,
      h: window.innerHeight - 100
    })
    this.setUpListeners()
  }

  setUpListeners = () => {
    this.cy.on('click', 'edge', (event) => {
    
    })

    this.cy.on('click', 'node', (event) => {
        
    })
  }
  
  render() {
    return(
      <div>
        <CytoscapeComponent
            elements={this.state.elements}
            style={{ width: this.state.w, height: this.state.h }}
            cy={(cy) => {this.cy = cy}}
            layout={this.state.layout}
            pan={ { x: 200, y: 200 } }
        />
      </div>
    )
  }
}