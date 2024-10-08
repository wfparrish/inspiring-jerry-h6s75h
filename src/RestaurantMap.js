// RestaurantMap.js
import React, { useState } from "react";
import Table from "./Table";
import Sector from "./Sector"; // Import the Sector component

function RestaurantMap() {
  const numberOfTables = 4;
  const [selectedTable, setSelectedTable] = useState(null);
  const [orders, setOrders] = useState(
    Array(numberOfTables)
      .fill()
      .map(() => Array(4).fill([]))
  );

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
      {/* Wrap your tables inside the Sector component */}
      <Sector>
        {/* Render multiple tables */}
        {Array.from({ length: numberOfTables }, (_, index) => (
          <div
            key={index}
            className={`table-square ${
              selectedTable === index ? "selected" : ""
            }`}
            onClick={() =>
              setSelectedTable(selectedTable === index ? null : index)
            }
          >
            Table {index + 1}
          </div>
        ))}
      </Sector>

      {/* Show the selected table's contents */}
      {selectedTable !== null && (
        <Table
          tableIndex={selectedTable}
          orders={orders[selectedTable]}
          updateOrder={updateOrder}
        />
      )}
    </div>
  );
}

export default RestaurantMap;
