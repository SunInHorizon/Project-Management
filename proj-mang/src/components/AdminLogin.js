import React, { useState } from "react";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const q = query(collection(db, "users"), where("username", "==", credentials.username));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        if (doc.data().password === credentials.password) {
          console.log("Login successful for:", doc.data());
        } else {
          console.error("Invalid credentials");
        }
      });
    } catch (error) {
      console.error("Error during login: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" onChange={handleChange} placeholder="Username" />
      <input type="password" name="password" onChange={handleChange} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
