import { SearchForm } from "./SearchForm";
import { VisitorsCounter } from "./VisitorsCounter";
import { LogoBlock } from "./Logo";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__content">
          <LogoBlock />
          <SearchForm />
        </div>
        <VisitorsCounter />
      </header>
    </>
  );
};
