import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../store/filtersSlice";
import { EdditPopup } from "../popup/EdditPopup";
import { Button } from "../ui/Button";

export const SearchForm = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = useCallback((e) => {
    e.preventDefault();
    setIsPopupOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(setSearchQuery(searchInput));
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchInput, dispatch]);

  return (
    <>
      <form className="header__search">
        <input
          className="header__search-input"
          placeholder="Поиск по имени"
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button
          onClick={openModal}
          className={"header__search-button btn"}
          type={"submit"}
          value={"Добавить"}
        />
      </form>
      {isPopupOpen && <EdditPopup setIsPopupOpen={setIsPopupOpen} />}
    </>
  );
};
