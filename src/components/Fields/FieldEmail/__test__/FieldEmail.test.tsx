import { render, screen, fireEvent } from '@testing-library/react';

import FieldEmail from '../FieldEmail';

describe('FieldEmail', () => {
  it('FieldEmail should render in document', () => {
    render(<FieldEmail 
        label="Email"
        value=""
        name="email"
        onChange={() => {}}
    />);
    const element = screen.getByRole('textbox');
    expect(element).toBeInTheDocument();
  });

  it('FieldEmail has label "Email"', () => {
    render(<FieldEmail 
        label="Email"
        value=""
        name="email"
        onChange={() => {}}
    />);
    const element = screen.getByRole('textbox');
    expect(element?.closest('label')?.querySelector('span')?.textContent).toBe('Email');
  });

  it('FieldEmail has name "email"', () => {
    render(<FieldEmail 
        label="Email"
        value=""
        name="email"
        onChange={() => {}}
    />);
    const element = screen.getByRole('textbox');
    expect(element.getAttribute('name')).toBe('email');
  });

  it('FieldEmail has placeholder "email"', () => {
    render(<FieldEmail 
        label="Email"
        value=""
        placeholder="email"
        name="email"
        onChange={() => {}}
    />);
    const element = screen.getByRole('textbox');
    expect(element.getAttribute('placeholder')).toBe('email');
  });

  it('FieldEmail has value "email@email.com"', () => {
    render(<FieldEmail 
        label="Email"
        value="email@email.com"
        placeholder="email"
        name="email"
        onChange={() => {}}
    />);
    const element: HTMLInputElement = screen.getByRole('textbox');
    expect(element?.value).toBe('email@email.com');
  });

  it('FieldEmail fire event Change', () => {
    render(<FieldEmail 
        label="Email"
        value=""
        placeholder="email"
        name="email"
        onChange={() => {}}
    />);
    const element: HTMLInputElement = screen.getByRole('textbox');
    fireEvent.change( element, { target: { value: 'myemail@email.com' } });
    expect(element?.value).toBe('myemail@email.com');
  });
});