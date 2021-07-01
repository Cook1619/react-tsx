import React, { useState } from "react";

export const AddListForm = () => {
  const [input, setinput] = useState({ name: "", age: "", url: "", notes: "" });
  return (
    <div>
      <input type='text' placeholder='Name' value={input.name} />
      <input type='text' placeholder='Age' value={input.age} />
      <input type='text' placeholder='Image Url' value={input.url} />
      <textarea placeholder='Notes' value={input.notes} />
    </div>
  );
};
