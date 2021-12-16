import React, { useState } from "react";

export const Create = () => {
  let initialState = { name: "", age: "", orgName: "" };

  const [state, setstate] = useState(initialState);
  const [inputs, setinputs] = useState([]);
  const formData = document.getElementById("formData");
  const handleChange = (e) => {
    setstate(() => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setinputs((inputs) => {
      return [...inputs, state];
    });
    formData.reset();
  };
  const handleDelete = (index) => {
    setinputs((inputs) => {
      let res = inputs.filter((val) => {
        // console.log("inputs", inputs[index]);
        // console.log("val", val);
        return val !== inputs[index];
      });
      return res;
    });
  };
  console.log(inputs);

  return (
    <>
      <form id="formData" onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} />
        <input type="text" name="age" onChange={handleChange} />
        <input type="text" name="orgName" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {inputs &&
        inputs.map((val, index) => {
          return (
            <div key={index}>
              <h1>{val.name}</h1>
              <h2>{val.age}</h2>
              <h3>{val.orgName}</h3>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          );
        })}
    </>
  );
};
