# Network Diagram Visualizer

## Description

Network Diagram Visualizer is a React SPA that renders a network graph using a given JSON payload. A graph node can be either a node or an alarm, each with a corresponding icon. It's built using `create-react-app`, `react-d3-graph`, `ace-editor` and styled with `react-materialize`.

## Rationale for React D3 Graph

D3.js is a robust, well-supported and very popular visualization library that supports many graph types, including network graphs. `react-d3-graph` is an npm package built specifically for rendering d3 network graphs in react. It's popular, well-documented and highly configurable. There are 56 configurations that can be set in a graph's `config` attribute. I investigated `react-vis-network-graph` and `cytoscape` and their configuration options, styling and documentation fell well short of `react-d3-graph`.

## Todo

- Improve mobile view
- Add more tests
- Add more sample data
- Format default sample data
- Add specific data error messages
- Improve error handling
- Refactor 

## Demo

[Visit demo app](https://flamboyant-engelbart-4100eb.netlify.app/)

## Project Screen Shots

![JSON Editor](src/images/json_editor.JPG?raw=true "JSON Editor")

![Network Graph](src/images/network_graph.JPG?raw=true "Rendered Network Graph")

## JSON Formatting Rules

- There must be a `vertices` and `edges` element that hold an array of objects
- Each vertices object must have an `id`, `label` and `type` property
- The vertex `type` must be either `alarm` or `node` 
- Each edge object must have an `id`, `label`, `type`, `source_id` and `target_id` property
- All `source_id` and `target_id` in `edges` must exist in the `vertices` object 

## Example JSON
```
{
	"vertices": [{
			"id": "n1",
			"label": "Node 1",
			"type": "node"
		},
		{
			"id": "n2",
			"label": "Node 2",
			"type": "node"
		},
		{
			"id": "a1",
			"label": "Alarm 1",
			"type": "alarm"
		},
		{
			"id": "a2",
			"label": "Alarm 2",
			"type": "alarm"
		}

	],
	"edges": [{
			"id": "e1",
			"label": "edge n1-n2",
			"type": "link",
			"source_id": "n1",
			"target_id": "n2"
		},
		{
			"id": "e2",
			"label": "edge n2-a1",
			"type": "link",
			"source_id": "n2",
			"target_id": "a1"
		},
		{
			"id": "e3",
			"label": "edge n1-a2",
			"type": "link",
			"source_id": "n1",
			"target_id": "a2"
		}
	]
}
```

## Installation and Setup Instructions

Clone this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  

## Contributing

Pull requests, bug reports, and feature requests are welcome.
