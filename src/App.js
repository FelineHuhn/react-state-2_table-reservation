import React from "react";
import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  function handleAddPeople() {
    setPeople(people + 1);
  }

  function handleDeletePeople() {
    if (people === 0) return;
    setPeople(people - 1);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        onAddPeople={handleAddPeople}
        onDeletePeople={handleDeletePeople}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
