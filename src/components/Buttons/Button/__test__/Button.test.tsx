import { render, screen } from '@testing-library/react';

import Button from '../Button';

describe('Button', () => {
  it('Button should render in document', () => {
    render(<Button label="Button"/>);
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });

  it('Button has label "Button"', () => {
    render(<Button label="Button"/>);
    const element = screen.getByRole('button');
    expect(element.textContent).toBe('Button');
  });

  it('Button has type "submit"', () => {
    render(<Button label="Button" type="submit"/>);
    const element = screen.getByRole('button');
    expect(element.getAttribute('type')).toBe('submit');
  });

  it('Button has class "button-primary button-main"', () => {
    render(<Button label="Button" classes={['button-primary', 'button-main']}/>);
    const element = screen.getByRole('button');
    expect(element.classList.value).toBe('button-primary button-main');
  });
});