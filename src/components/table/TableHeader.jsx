const headers = [
  { key: "visitorNum", value: "Номер" },
  { key: "name", value: "ФИО" },
  { key: "company", value: "Компания" },
  { key: "group", value: "Группа" },
  { key: "isPresent", value: "Присутствие" },
];

export const TableHeader = () => (
  <thead>
    <tr>
      {headers.map(({ _, value }) => (
        <th key={value}>{value}</th>
      ))}
    </tr>
  </thead>
);
