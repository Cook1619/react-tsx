import React from "react";
import { IState as IProps } from "../App";

export const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map(person => {
      return (
        <li>
          <div>
            <img src={person.url} alt='a person' />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age}</p>
          <p>{person.note}</p>
        </li>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};
