import { memo } from "react";

export const Checkbox = memo(({ label, checked, onValueChange, id }) => {
  const handleCheckboxChange = (e) => onValueChange(e.target.checked);

  return (
    <div className="form-group">
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
      <input
        type="checkbox"
        className="form-check-input"
        checked={checked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
});
