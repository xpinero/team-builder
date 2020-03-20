import React from "react";

const Members = props => {
  return (
    <div className="member-list">
      {props.people.map(person => (
        <div className="member" key={person.id}>
          <h2>{person.name}</h2>
          <p>{person.email}</p>
          <p>{person.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Members;