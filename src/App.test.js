import { render, screen } from '@testing-library/react';
import App from './App';
import SampleData from './lib/transformData'

const sampleData = JSON.stringify(SampleData)

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
