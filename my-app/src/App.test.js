import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('render', async () => {
  render(<App />);

  await waitFor(() => {
    expect(screen.getByText(/Taloc IO/i)).toBeInTheDocument();
  });
  expect(screen.getByText(/active:/i)).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: 'Connect Wallet' })
  ).toBeInTheDocument();
  
});
