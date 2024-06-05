// src/App.js
import { ContactForm } from 'components';
import React, { useState } from 'react';
import { data } from 'static';

const App = () => {
  const [contacts, setContacts] = useState(data);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  return (
    <div className="App">
      <h1>Contact List</h1>
      <ContactForm addContact={addContact} />
    </div>
  );
};

export default App;
