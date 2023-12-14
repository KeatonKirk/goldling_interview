import { render, screen } from '@testing-library/react';
import App from './App';


test('shows charts', () => {
  render(<App />);
  const chartElement = screen.getAllByRole('img');
  expect(chartElement).toBeInTheDocument();
})