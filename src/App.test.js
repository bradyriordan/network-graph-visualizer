import { render, screen } from '@testing-library/react';
import App from './App';
import transformData from './lib/TransformData'
import sourceData from './lib/SourceData'
import sampleData from './lib/SampleData'


const transformedData = transformData(sampleData);

test('renders network graph', () => {
  render(<App />);
  const linkElement = screen.getByText(/graph visualizer/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders edit code button', () => {
  render(<App />);
  const linkElement = screen.getByText(/edit code/i);
  expect(linkElement).toBeInTheDocument();
});

test('sampleData has two vertices', () => {
  expect(sampleData.vertices).toHaveLength(2)
});

test('sampleData has one edge', () => {
  expect(sampleData.edges).toHaveLength(1)
});

test('sourceData has two vertices', () => {
  expect(sourceData.vertices).toHaveLength(3)
});

test('sourceData has one edge', () => {
  expect(sourceData.edges).toHaveLength(2)
});

test('transformed data from sample data has one link', () => {
  expect(transformedData.links).toHaveLength(1)
});

test('transformed data from sample data has two nodes', () => {
  expect(transformedData.nodes).toHaveLength(2)
});

test('transformed data from sample data has source property', () => {
  expect(transformedData.links[0].source).toEqual('n1')
});

test('transformed data from sample data has target property', () => {
  expect(transformedData.links[0].target).toEqual('n2')
})