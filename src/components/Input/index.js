import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage as FormikError } from 'formik';

// Components
import { Input, ErrorMessage } from './Input.styles';

export function InputField({
  field: { name, value, onChange },
  label,
  type = 'text',
  form: { errors, touched },
}) {
  const hasError = name in touched && name in errors;
  return (
    <>
      <label className="w-100 mb-0">
        {label}
        <Input name={name} type={type} value={value} onChange={onChange} hasError={hasError} />
      </label>
      <FormikError name={name} component={ErrorMessage} />
    </>
  );
};

InputField.propTypes = {
  field: PropTypes.shape({
    name:PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  }).isRequired,
  form: PropTypes.shape({
    errors: PropTypes.objectOf(PropTypes.any),
    touched: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'date', 'email']),
};