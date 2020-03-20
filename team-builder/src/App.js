import React, {useState} from 'react';
import Team from './components/Team';
import Form from "./components/Form"
import './App.css';

function App() {

    const [formState, setFormState] = useState([
      {
        id: 1,
        name: "Xaver Pinero",
        email: "xaver.pinero@gmail.com",
        role: "Software Engineer"
      }
    ]);
    const addNoteHandler = data => {
      setFormState([...formState, data]);
    }

  return (
    <div className="App">
      <Team people = {formState}/>
      <Form addPeople = {addNoteHandler}/>
    </div>
  );
}

export default App;
