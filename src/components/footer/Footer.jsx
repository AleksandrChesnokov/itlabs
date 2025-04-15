import { useDispatch, useSelector } from "react-redux";
import { setPresenceFilter } from "../../store/filtersSlice";
import { Button } from "../ui/Button";

const filterOptions = [
  { value: "absent", label: "Отсутствующим" },
  { value: "present", label: "Присутствующим" },
  { value: "all", label: "Без фильтра" },
];

export const Footer = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filters.presenceFilter);

  const handleFilterChange = (filterValue) => {
    dispatch(setPresenceFilter(filterValue));
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <span>Фильтровать по:</span>
        {filterOptions.map(({ value, label }) => (
          <Button
            key={value}
            onClick={() => handleFilterChange(value)}
            className={`filter-button ${
              currentFilter === value ? "active" : ""
            }`}
            type="button"
            value={label}
          />
        ))}
      </div>
    </footer>
  );
};
