import { memo } from "react";

export const Button = memo(({ onClick, className, type, value }) => (
  <button onClick={onClick} className={className} type={type}>
    {value}
  </button>
));
