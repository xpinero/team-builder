import React, { useState } from "react";

const Form = props => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    role: ""
  });

  const changeHandler = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })};

    const handleSubmit = event => {
      event.preventDefault();
      props.addPeople({
        ...formState,
        id: Date.now()
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formState.name}
        onChange={changeHandler}
        placeholder="This is the name"
        autoComplete='none'
      />
      <input
        type="email"
        name="email"
        value={formState.email}
        onChange={changeHandler}
        placeholder="This is the email"
        autoComplete='none'
      />
      <input
        type="text"
        name="role"
        value={formState.role}
        onChange={changeHandler}
        placeholder="This is the role"
        autoComplete='none'
      />
      <button type="submit">Create Member!</button>
    </form>
  );
}

export default Form;
