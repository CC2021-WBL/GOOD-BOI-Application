import { render, screen } from '@testing-library/react';

import InputField from '../../Molecules/InputField/InputField';
import TextArea from '../../Atoms/TextArea/TextArea';
import userEvent from '@testing-library/user-event';

describe('TextArea', () => {
  it('should renders input field', () => {
    render(
      <InputField
        labelText="* Email"
        htmlFor="email"
        type="email"
        placeholder="&#xf0e0; Email"
        id="email"
        name="email"
        required
        onChange={() => {}}
      />,
    );
  });

  it('renders textarea to fill with message', () => {
    render(
      <TextArea
        labelText="* Wpisz wiadomość"
        htmlFor="message"
        id="message"
        name="message"
        required
        onChange={() => {}}
        placeholder="Wpisz wiadomość"
      />,
    );

    const textarea = screen.getByPlaceholderText('Wpisz wiadomość');

    expect(textarea).toBeInTheDocument();
  });

  it('render component checkbox', () => {
    render(
      <input
        id="register-checkbox"
        type="checkbox"
        required
        data-testid="my-checkbox"
      />,
    );
    //test comment
    const checkbox = screen.getByTestId('my-checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    userEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });
});
