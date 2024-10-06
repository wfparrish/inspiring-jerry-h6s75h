// RestaurantMap.js
import React, { useState } from "react";
import Table from "./Table";

function RestaurantMap() {
  const numberOfTables = 4; // Define the number of tables
  const [selectedTable, setSelectedTable] = useState(null); // Track the selected table
  const [orders, setOrders] = useState(
    Array(numberOfTables)
      .fill()
      .map(() => Array(4).fill([]))
  ); // Initialize orders for each table and each seat

  // Function to update the orders for a specific table and seat
  const updateOrder = (tableIndex, seatIndex, item) => {
    const newOrders = [...orders];
    newOrders[tableIndex][seatIndex] = [
      ...newOrders[tableIndex][seatIndex],
      item,
    ];
    setOrders(newOrders);
  };

  return (
    <div className="restaurant-map">
      {/* Render multiple tables */}
      {Array.from({ length: numberOfTables }, (_, index) => (
        <div
          key={index}
          className={`table-square ${
            selectedTable === index ? "selected" : ""
          }`} // Apply active class
          onClick={() =>
            setSelectedTable(selectedTable === index ? null : index)
          } // Toggle selection
        >
          Table {index + 1}
        </div>
      ))}

      {/* Show the selected table's contents */}
      {selectedTable !== null && (
        <Table
          tableIndex={selectedTable}
          orders={orders[selectedTable]} // Pass the orders for the selected table
          updateOrder={updateOrder} // Pass the updateOrder function
        />
      )}
    </div>
  );
}

export default RestaurantMap;
