import { memo } from "react";

export const FormInput = memo(({ label, type, name, value, onValueChange }) => {
  const handleFullnameChange = (e) => onValueChange(e.target.value);
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleFullnameChange}
        className={`form-control`}
      />
    </div>
  );
});
