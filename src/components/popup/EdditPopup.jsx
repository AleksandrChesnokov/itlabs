import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVisitor, updateVisitor } from "../../store/visitorsSlice";
import { FormInput } from "../ui/FormInput";
import { SelectField } from "../ui/SelectField";
import { Checkbox } from "../ui/Checkbox";
import logo from "../../assets/close-circle.svg";

const options = [
  { value: "", label: "Выбрать" },
  { value: "guest", label: "Прохожий" },
  { value: "client", label: "Клиент" },
  { value: "partner", label: "Партнер" },
];

export const EdditPopup = ({ setIsPopupOpen, visitorNum = null }) => {
  const [group, setGroup] = useState("");
  const [fullname, setFullname] = useState("");
  const [company, setCompany] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  const visitor = useSelector((state) =>
    state.visitors.find((v) => v.visitorNum === visitorNum)
  );

  const isEdit = !!visitor;

  useEffect(() => {
    if (isEdit) {
      setFullname(visitor.name || "");
      setCompany(visitor.company || "");
      setGroup(visitor.group || "");
      setIsChecked(visitor.isPresent || false);
    }
  }, [visitor, isEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: fullname,
      company: company,
      group: group,
      isPresent: isChecked,
      visitorNum: visitorNum,
    };

    if (isEdit) {
      dispatch(updateVisitor(formData));
    } else {
      dispatch(addVisitor(formData));
    }

    setIsPopupOpen(false);
  };

  return createPortal(
    <div
      onClick={(e) => {
        if (e.target.closest(".popup__content")) return;
        setIsPopupOpen(false);
      }}
      className="popup"
    >
      <div className="popup__content">
        <div
          className="popup__close-icon-wrapper"
          onClick={() => setIsPopupOpen(false)}
        >
          <img className="popup__close-icon" src={logo} />
        </div>
        <form onSubmit={handleSubmit}>
          <FormInput
            label={"ФИО"}
            type={"text"}
            name={"visitor"}
            value={fullname}
            onValueChange={setFullname}
          />

          <FormInput
            label={"Компания"}
            type={"text"}
            name={"company"}
            value={company}
            onValueChange={setCompany}
          />

          <SelectField
            label={"Группа"}
            name={"group"}
            value={group}
            onValueChange={setGroup}
            options={options}
          />

          <Checkbox
            label={"Присутствие"}
            checked={isChecked}
            onValueChange={setIsChecked}
            id={"check"}
          />
          <div className="popup__button-group">
            <button className="btn" type="submit">
              {isEdit ? "Сохранить" : "Добавить"}
            </button>
            <button
              className="btn btn-grey"
              type="button"
              onClick={() => setIsPopupOpen(false)}
            >
              Закрыть
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};
