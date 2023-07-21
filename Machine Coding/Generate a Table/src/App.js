import { useState } from "react";
import "./styles.css";
import Table from "./Table";
import Form from "./Form";

export default function App() {
  const [rows, setRows] = useState("");
  const [columns, setColumns] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    // console.log(data.get("rows"));
    setRows(data.get("rows"));
    setColumns(data.get("columns"));
  };

  return (
    <div className="container">
      <h2>Generate Table</h2>
      <Form handleSubmit={handleSubmit} />
      <Table rows={rows} cols={columns} />
    </div>
  );
}
