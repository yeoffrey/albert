import React  from 'react';
import CytoscapeComponent from 'react-cytoscapejs';

const elements = [ // list of graph elements to start with
  { // node a
    data: { id: 'a', label: 'Node1' }, position: { x: 0, y: 0 }
  },
  { // node b
    data: { id: 'b', label: 'Node2' }, position: { x: 100, y: 0 }
  },
  { // edge ab
    data: { id: 'ab', source: 'a', target: 'b', label: 'Edge from Node1 to Node2' }
  }
];

const stylesheet = [
  {
    selector: 'node',
    style: {
      width: 20,
      height: 20,
      shape: 'rectangle'
    }
  },
  {
    selector: 'edge',
    style: {
      width: 15
    }
  }
];

const style = {
  width: '800px', 
  height: '800px'
};

const layout = {
  name: 'grid',
  rows: 1
};

var cytoscapeComp = <CytoscapeComponent elements={elements} style={style} layout={layout} cy={(cy) => {this.cy = cy}} />;

function App() {
  //stylesheet={{stylesheet}}
  return cytoscapeComp;
}

export default App;
