// Table.js
import React, { useState } from "react";
import Seat from "./Seat";

function Table({ tableIndex, orders, updateOrder }) {
  const numberOfSeats = 4; // Set the number of seats
  const [selectedSeat, setSelectedSeat] = useState(null); // Track the selected seat

  // Function to go back to the seat selection
  const onBackToSeats = () => {
    setSelectedSeat(null); // Reset selected seat to show all seats
  };

  return (
    <div className="table-content">
      <h1>POS System - Table {tableIndex + 1}</h1>
      <h2>Available Seats</h2>

      {/* Render buttons for each seat */}
      <div className="seats">
        {Array.from({ length: numberOfSeats }, (_, index) => (
          <button key={index} onClick={() => setSelectedSeat(index)}>
            Seat {index + 1}
          </button>
        ))}
      </div>

      {/* Show the selected seat and its current order if a seat is selected */}
      {selectedSeat !== null && (
        <div className="selected-seat">
          <Seat
            seatNumber={selectedSeat + 1}
            order={orders[selectedSeat]} // Pass the order for the specific seat
            addToOrder={(item) => updateOrder(tableIndex, selectedSeat, item)} // Pass the updateOrder function
            onBackToSeats={onBackToSeats} // Function to go back to seat selection
          />
        </div>
      )}
    </div>
  );
}

export default Table;
