import { render, screen } from '@testing-library/react';

import Link from '../Link';

describe('Link', () => {
  it('Link should render in document', () => {
    render(<Link 
        title="Link"
        url="#"
    />);
    const element = screen.getByText('Link');
    expect(element).toBeInTheDocument();
  });

  it('Link has href "https://test.dev/"', () => {
    render(<Link 
        title="Link"
        url="https://test.dev/"
    />);
    const element: HTMLAnchorElement = screen.getByText('Link');
    expect(element.href).toBe('https://test.dev/');
  });

  it('Link has target "_blank"', () => {
    render(<Link 
        title="Link"
        url="https://test.dev/"
        target="_blank"
    />);
    const element: HTMLAnchorElement = screen.getByText('Link');
    expect(element.getAttribute('target')).toBe('_blank');
  });
});