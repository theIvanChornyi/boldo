import React from 'react';
import { classBuilder } from '../../utils/class-builder.util';
import * as css from './input.styles';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  error?: string;
  touched?: boolean;
  placeholder?: string;
  type?: string;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ name, label, error, touched, placeholder, type = 'text' }, ref) => {
    const isError = Boolean(error) && Boolean(touched);
    return (
      <div className={css.input}>
        {label ? (
          <label className={css.input} htmlFor={name}>
            {label}
          </label>
        ) : (
          <span></span>
        )}
        <div className={css.input}>
          <input
            type={type}
            ref={ref}
            id={name}
            name={name}
            placeholder={placeholder}
            className={classBuilder([css.input])}
          />
        </div>

        {isError && (
          <p role="alert" className={css.input}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

export default Input;
