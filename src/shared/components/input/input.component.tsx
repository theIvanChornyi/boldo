import { getIn, useFormikContext } from 'formik';
import React from 'react';
import { classBuilder } from '../../utils/class-builder.util';
import * as css from './input.styles';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ name, type = 'text', className, ...props }, ref) => {
    const { values, handleChange, errors, handleBlur, touched } =
      useFormikContext<Record<string, string>>();
    const isErrorExists =
      Boolean(getIn(errors, name)) && Boolean(touched[name]);
    return (
      <span className={css.inputWrapper}>
        <input
          id={name}
          type={type}
          value={values[name] ?? ''}
          onChange={handleChange}
          onBlur={handleBlur}
          className={classBuilder([css.input, className])}
          {...props}
        />
        {isErrorExists && (
          <div className={css.errorMessage}>{errors[name]}</div>
        )}
      </span>
    );
  }
);

export default Input;
