// src/components/ContactForm.js
import React, { useState } from "react";

const ContactForm = ({ addContact }) => {
  const [newContact, setNewContact] = useState({
    name: "",
    gender: "Male",
    type: "Personal",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(newContact);
    setNewContact({ name: "", gender: "Male", type: "Personal" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newContact.name}
        onChange={handleChange}
      />
      <select name="gender" value={newContact.gender} onChange={handleChange}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <select name="type" value={newContact.type} onChange={handleChange}>
        <option value="Personal">Personal</option>
        <option value="Business">Business</option>
        <option value="Business">Developer</option>
      </select>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export { ContactForm };
