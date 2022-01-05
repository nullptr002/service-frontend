import React from "react";
import Table from "../components/Table.jsx";

export default function Transactions({ selectedRows, setSelectedRows }) {
  const [transactions, setTransactions] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch(
        "somewebsite/transaction/list/"
      );
      const data = await response.json();
      console.log(data);
      setTransactions(data);
    })();
  }, []);

  if (transactions.length === 0) return <p>Loading transactions...</p>;

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "car", headerName: "Car ID", width: 130 },
    { field: "card", headerName: "Card ID", width: 130 },
    { field: "components_price", headerName: "Components price", width: 130 },
    { field: "workmanship", headerName: "Workmanship", width: 90 },
    { field: "datetime", headerName: "Date and time", width: 90 },
  ];

  return (
    <Table
      selectedRows={selectedRows}
      setSelectedRows={setSelectedRows}
      rows={transactions}
      columns={columns}
    />
  );
}

//
//
