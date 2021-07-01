import React, { useState } from "react";
import "./App.css";
import { AddListForm } from "./components/AddListForm";
import { List } from "./components/List";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Aaron Rodgers",
      age: 36,
      url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/8439.png",
    },
  ]);
  return (
    <div className='App'>
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddListForm people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
