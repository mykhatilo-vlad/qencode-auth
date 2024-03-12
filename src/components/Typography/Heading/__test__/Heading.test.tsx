import { render, screen } from '@testing-library/react';

import Heading from '../Heading';

describe('Heading', () => {
  it('Heading should render in document', () => {
    render(<Heading 
        title="Heading"
    />);
    const element = screen.getByText('Heading');
    expect(element).toBeInTheDocument();
  });

});