import { render, screen } from '@testing-library/react';

import Paragraph from '../Paragraph';

describe('Paragraph', () => {
  it('Paragraph should render in document', () => {
    render(<Paragraph>Paragraph</Paragraph>);
    const element = screen.getByText('Paragraph');
    expect(element).toBeInTheDocument();
  });
});