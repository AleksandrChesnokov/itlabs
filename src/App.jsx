import "./main.scss";
import { Header } from "./components/header/Header";
import { Table } from "./components/table/Table";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
