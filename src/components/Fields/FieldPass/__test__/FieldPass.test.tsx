import { render, screen, fireEvent } from '@testing-library/react';

import FieldPass from '../FieldPass';

describe('FieldPass', () => {
  it('FieldPass should render in document', () => {
    render(<FieldPass 
        label="Password"
        value=""
        name="password"
        placeholder="password"
        onChange={() => {}}
    />);
    const element = screen.getByPlaceholderText('password');
    expect(element).toBeInTheDocument();
  });

  it('FieldPass has label "Password"', () => {
    render(<FieldPass 
        label="Password"
        value=""
        name="password"
        placeholder="password"
        onChange={() => {}}
    />);
    const element = screen.getByPlaceholderText('password');
    expect(element?.closest('label')?.querySelector('span')?.textContent).toBe('Password');
  });

  it('FieldPass has name "password"', () => {
    render(<FieldPass 
        label="Password"
        value=""
        name="password"
        placeholder="password"
        onChange={() => {}}
    />);
    const element = screen.getByPlaceholderText('password');
    expect(element.getAttribute('name')).toBe('password');
  });

  it('FieldPass has placeholder "password"', () => {
    render(<FieldPass 
        label="password"
        value=""
        placeholder="password"
        name="password"
        onChange={() => {}}
    />);
    const element = screen.getByPlaceholderText('password');
    expect(element.getAttribute('placeholder')).toBe('password');
  });

  it('FieldPass has value "12345678"', () => {
    render(<FieldPass 
        label="password"
        value="12345678"
        placeholder="password"
        name="password"
        onChange={() => {}}
    />);
    const element: HTMLInputElement = screen.getByPlaceholderText('password');
    expect(element?.value).toBe('12345678');
  });

  it('FieldPass fire event Change', () => {
    render(<FieldPass 
        label="password"
        value=""
        placeholder="password"
        name="password"
        onChange={() => {}}
    />);
    const element: HTMLInputElement = screen.getByPlaceholderText('password');
    fireEvent.change( element, { target: { value: '123456789' } });
    expect(element?.value).toBe('123456789');
  });
});