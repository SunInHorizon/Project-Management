import React, { useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const AdminRegistration = () => {
  const [admin, setAdmin] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin((prevAdmin) => ({ ...prevAdmin, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "admins"), admin);
      console.log("Admin registered with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding admin: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" onChange={handleChange} placeholder="Username" />
      <input type="password" name="password" onChange={handleChange} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default AdminRegistration;
