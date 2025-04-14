import { useState, memo } from "react";
import { EdditPopup } from "../popup/EdditPopup";

export const TableRow = memo(
  ({ visitorNum, name, company, group, isPresent }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openModal = (e) => {
      setIsPopupOpen((prev) => !prev);
    };

    return (
      <>
        <tr onClick={openModal}>
          <td>{visitorNum}</td>
          <td>{name}</td>
          <td>{company}</td>
          <td>{group}</td>
          <td>
            <div className={`circle ${isPresent ? "present" : "absent"}`}></div>
          </td>
        </tr>
        {isPopupOpen && (
          <EdditPopup setIsPopupOpen={setIsPopupOpen} visitorNum={visitorNum} />
        )}
      </>
    );
  }
);
