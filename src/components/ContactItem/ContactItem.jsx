// src/components/Contact.js
import React, { useState } from "react";

const ContactItem = ({ item, updateContact, deleteContact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState(item);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedContact({ ...editedContact, [name]: value });
  };

  const handleEditSubmit = () => {
    updateContact(editedContact);
    setIsEditing(false);
  };

  console.log(item);

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={editedContact.name}
            onChange={handleEditChange}
          />
          <select
            name="gender"
            value={editedContact.gender}
            onChange={handleEditChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select
            name="type"
            value={editedContact.type}
            onChange={handleEditChange}
          >
            <option value="Personal">Personal</option>
            <option value="Business">Business</option>
          </select>
          <button onClick={handleEditSubmit} className="btn">Save</button>
        </div>
      ) : (
        <div className="details-container">
          <span>{item?.name}</span>
          <span>({item?.gender})</span>
          <span>{item?.type}</span>
          <span>
            <button onClick={() => setIsEditing(true)} className="btn">Edit</button>
          </span>
          <span>
            <button onClick={() => deleteContact(item.id)} className="btn-delete">Delete</button>
          </span>
        </div>
      )}
    </div>
  );
};

export default ContactItem;
