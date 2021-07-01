import React, { useState } from "react";
import { List } from "./components/List";
import "./App.css";

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setpeople] = useState<IState["people"]>([
    { name: "Aaron Rodgers", age: 36, url: "", note: "Test" },
  ]);
  return (
    <div className='App'>
      <h1>People Invited to my Party</h1>
      <List people={people} />
    </div>
  );
}

export default App;
