import { useSelector } from "react-redux";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

export const Table = () => {
  const visitors = useSelector((state) => state.visitors);
  const filters = useSelector((state) => state.filters);

  const getFilteredVisitors = () => {
    const { searchQuery, presenceFilter } = filters;
    const query = searchQuery.toLowerCase();

    return visitors.filter((visitor) => {
      const matchesSearch = visitor.name.toLowerCase().includes(query);
      const matchesPresence =
        presenceFilter === "present"
          ? visitor.isPresent
          : presenceFilter === "absent"
          ? !visitor.isPresent
          : true;

      return matchesSearch && matchesPresence;
    });
  };

  const filteredVisitors = getFilteredVisitors();

  return (
    <main className="main">
      <div className="main__content">
        <table className="table">
          <TableHeader />
          <tbody>
            {filteredVisitors.map((visitor) => (
              <TableRow
                key={visitor.visitorNum}
                visitorNum={visitor.visitorNum}
                name={visitor.name}
                isPresent={visitor.isPresent}
                group={visitor.group}
                company={visitor.company}
              />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};
