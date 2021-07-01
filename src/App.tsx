import React, { useState } from "react";
import "./App.css";
import { AddListForm } from "./components/AddListForm";
import { List } from "./components/List";

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
      <AddListForm />
    </div>
  );
}

export default App;
