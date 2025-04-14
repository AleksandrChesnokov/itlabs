import { useSelector } from "react-redux";

export const VisitorsCounter = () => {
  const visitors = useSelector((state) => state.visitors);

  const visitorNum = visitors.reduce((acc, visitor) => {
    return visitor.isPresent ? acc + 1 : acc;
  }, 0);

  return (
    <div className="header__visitors">
      <div className="header__visitors-label">Посетители</div>
      <div className="header__visitors-count">
        <span className="header__visitors-present">{visitorNum}</span>/
        <span className="header__visitors-absent">
          {visitors.length - visitorNum}
        </span>
      </div>
    </div>
  );
};
