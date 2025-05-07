import React from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Dipesh",
      email: "malvis@gmail.com"
    },
    {
      id: "2",
      name: "Nipesh",
      email: "nicks@gmail.com"
    }
  ];
  return(
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
