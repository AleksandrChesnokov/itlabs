import { useDispatch, useSelector } from "react-redux";
import { setPresenceFilter } from "../../store/filtersSlice";
import { Button } from "../ui/Button";

export const Footer = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filters.presenceFilter);

  return (
    <footer className="footer">
      <div className="footer__content">
        <span>Фильтровать по:</span>
        <Button
          onClick={(e) => dispatch(setPresenceFilter("absent"))}
          className={`filter-button ${
            currentFilter === "absent" ? "active" : ""
          }`}
          type={"button"}
          value={"Отсутсвующим"}
        />

        <Button
          onClick={(e) => dispatch(setPresenceFilter("present"))}
          className={`filter-button ${
            currentFilter === "present" ? "active" : ""
          }`}
          type={"button"}
          value={"Присутствующим"}
        />

        <Button
          onClick={(e) => dispatch(setPresenceFilter("all"))}
          className={`filter-button ${currentFilter === "all" ? "active" : ""}`}
          type={"button"}
          value={"Без фильтра"}
        />
      </div>
    </footer>
  );
};
