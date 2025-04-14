import { memo } from "react";

export const SelectField = memo(
  ({ label, name, value, onValueChange, options }) => {
    const handleGroupChange = (e) => onValueChange(e.target.value);
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select
          name={name}
          value={value}
          onChange={handleGroupChange}
          className="form-control"
        >
          {options.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);
