// src/components/ContactForm.js
import React, { useState } from "react";

const ContactForm = ({ addContact }) => {
  const [newContact, setNewContact] = useState({
    name: "",
    gender: "Male",
    type: "Personal",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newContact?.name.trim() === "") {
      setError("please fill the name field");
      setTimeout(() => {
        setError("");
      }, 1500);
    } else {
      addContact(newContact);
      setNewContact({ name: "", gender: "Male", type: "Personal" });
    }
  };

  return (
    <>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit} className="form-container">
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
        <button type="submit" className="btn">
          Add Contact
        </button>
      </form>
    </>
  );
};

export { ContactForm };
