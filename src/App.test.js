import { render, screen } from '@testing-library/react';
import App from './App';
import TransformData from './lib/TransformData'
import SampleData from './data/SampleData'
import DataValidator from './lib/DataValidator'
import InvalidEdges from './data/InvalidEdges';
import DuplicateVertexIDs from './data/DuplicateVertexIDs';
import InvalidVertices from './data/InvalidVertices'


const transformedData = TransformData(SampleData);
const validJSON = DataValidator(JSON.stringify(SampleData))
const inValidJSON = DataValidator('{{}')
const inValidEdges = DataValidator(JSON.stringify(InvalidEdges))
const inValidVertices = DataValidator(JSON.stringify(InvalidVertices))
const duplicateVertexIDs = DataValidator(JSON.stringify(DuplicateVertexIDs))

test('renders network graph', () => {
  render(<App />);
  const linkElement = screen.getByText(/graph visualizer/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders edit code button', () => {
  render(<App />);
  const linkElement = screen.getByText(/edit json/i);
  expect(linkElement).toBeInTheDocument();
});

test('sampleData has two vertices', () => {
  expect(SampleData.vertices).toHaveLength(3)
});

test('sampleData has one edge', () => {
  expect(SampleData.edges).toHaveLength(2)
});

test('transformed data from sample data has one link', () => {
  expect(transformedData.links).toHaveLength(2)
});

test('transformed data from sample data has two nodes', () => {
  expect(transformedData.nodes).toHaveLength(3)
});

test('transformed data from sample data has source property', () => {
  expect(transformedData.links[0].source).toEqual('n1')
});

test('transformed data from sample data has target property', () => {
  expect(transformedData.links[0].target).toEqual('n2')
})

test('data validator returns object with json property', () => {
  expect(validJSON).toHaveProperty('json')
})

test('data validator returns object with edges property', () => {
  expect(validJSON).toHaveProperty('edges')
})

test('data validator returns object with vertices property', () => {
  expect(validJSON).toHaveProperty('vertices')
})

test('valid json returns object with correct shape and all null values', () => {
  expect(validJSON).toMatchObject({edges: null, json: null, vertices: null})
})

test('invalid json returns object with json error', () => {
  expect(inValidJSON.json.error).toEqual('Invalid JSON')
})

test('invalid edges returns object with correct edges error', () => {
  expect(inValidEdges.edges.error).toEqual('The source_id in edge in position 1 doesn\'t have an associated vertex')
})

test('invalid vertices returns object with correct vertices error', () => {
  expect(inValidVertices.vertices.error).toEqual('The vertex in position 1 needs a node or alarm type')
})

test('duplicate vertex ids returns object with correct vertices error', () => {
  expect(duplicateVertexIDs.vertices.error).toEqual('Your vertices object has duplicate ids')
})