// App.test.jsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main content', () => {
    render(<App />);
    const linkElement = screen.getByText(/Simple React App/i);
    expect(linkElement).toBeInTheDocument();
});