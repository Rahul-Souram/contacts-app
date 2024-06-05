// src/App.js
import { ContactForm } from 'components';
import ContactItem from 'components/ContactItem/ContactItem';
import React, { useState } from 'react';
import { data } from 'static';

const App = () => {
  const [contacts, setContacts] = useState(data);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  const updateContact = (updatedContact) => {
    setContacts(contacts.map(contact => contact.id === updatedContact.id ? updatedContact : contact));
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="App">
      <h1>Contact List</h1>
      <div>
        <ContactForm addContact={addContact} />
        {contacts.map(item => {
          console.log(item);
          return (
            <ContactItem item={item} updateContact={updateContact} deleteContact={deleteContact} />
          )
        })}
      </div>
    </div>
  );
};

export default App;
