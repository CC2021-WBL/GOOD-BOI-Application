import { render, screen } from '@testing-library/react';

import InputField from '../../Molecules/InputField/InputField';
import TextArea from '../../Atoms/TextArea/TextArea';

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
        // value={setFormData.email}
        onChange={() => {}}
        // className={errors.email ? 'red-border' : 'none'}
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
        // className={errors.message ? 'red-border' : 'none'}
      />,
    );

    const textarea = screen.getByPlaceholderText('Wpisz wiadomość');

    expect(textarea).not.toBeInTheDocument();
  });
});
