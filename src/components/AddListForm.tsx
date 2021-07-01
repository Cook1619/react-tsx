import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        age: number;
        url: string;
        note?: string | undefined;
      }[]
    >
  >;
}

export const AddListForm: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({ name: "", age: "", url: "", notes: "" });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (): void => {
    if (!input.name || !input.age || !input.url) {
      return;
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: +input.age,
        url: input.url,
        note: input.notes,
      },
    ]);
  };
  return (
    <div>
      <input
        type='text'
        placeholder='Name'
        value={input.name}
        onChange={handleChange}
        name='name'
      />
      <input
        type='text'
        placeholder='Age'
        value={input.age}
        onChange={handleChange}
        name='age'
      />
      <input
        type='text'
        placeholder='Image Url'
        value={input.url}
        onChange={handleChange}
        name='url'
      />
      <textarea
        placeholder='Notes'
        value={input.notes}
        onChange={handleChange}
        name='notes'
      />
      <button onClick={handleClick}>Add to list</button>
    </div>
  );
};
