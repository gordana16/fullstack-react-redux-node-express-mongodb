import React from "react";

const FormInput = ({
  input,
  label,
  type,
  className,
  meta: { touched, error }
}) => (
  <div className="form-group">
    <label>{label}</label>
    <div className="input-group">
      <input {...input} type={type} className={className} autoComplete="off" />
    </div>
    {touched && (error && <div className="alert alert-danger">{error}</div>)}
  </div>
);

export default FormInput;
