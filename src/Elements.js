var elements = [
    { group: 'nodes', data: { id: '1', label: 'NATO'} },
    { group: 'nodes', data: { id: '2', label: 'EU'} },
    { group: 'nodes', data: { id: '3', label: 'Ukraine' } },
    { group: 'nodes', data: { id: '4', label: 'United States', parent: '1' } },
    { group: 'nodes', data: { id: '5', label: 'Canada', parent: '1' } },
    { group: 'nodes', data: { id: '6', label: 'Germany', parent: '1' } },
    { group: 'nodes', data: { id: '8', label: 'Turkey', parent: '1' } },
    { group: 'nodes', data: { id: '9', label: 'United Kingdom', parent: '1' } },
    { group: 'nodes', data: { id: '15', label: 'Russia' } },
    { group: 'nodes', data: { id: '16', label: 'Japan' } },
    { group: 'nodes', data: { id: '17', label: 'New Zealand' } },
    { group: 'nodes', data: { id: '18', label: 'Australia' } },

    { group: 'edges', data: { id: 'e1', label: 'Invades', source: '15', target: '3'}},
    { group: 'edges', data: { id: 'e2', label: 'Bolsters arms for', source: '1', target: '3'}},
    { group: 'edges', data: { id: 'e3', label: 'Sanctions', source: '4', target: '15'}},
    { group: 'edges', data: { id: 'e4', label: 'Sanctions', source: '5', target: '15'}},
    { group: 'edges', data: { id: 'e5', label: 'Bolsters arms for', source: '6', target: '3'}},
    { group: 'edges', data: { id: 'e6', label: 'Sanctions', source: '2', target: '15'}},
    { group: 'edges', data: { id: 'e7', label: 'Sanctions', source: '16', target: '15'}},
    { group: 'edges', data: { id: 'e8', label: 'Sanctions', source: '9', target: '15'}},
    { group: 'edges', data: { id: 'e9', label: 'Sanctions', source: '17', target: '15'}},
    { group: 'edges', data: { id: 'e10', label: 'Sanctions', source: '18', target: '15'}},
    { group: 'edges', data: { id: 'e11', label: 'Cuts of boats from black sea', source: '8', target: '15'}},
]

export default elements;