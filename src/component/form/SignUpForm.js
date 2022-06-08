import React, { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.js';
const defaultValue = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultValue);
  const { displayName, email, password, confirmPassword } = formFields;
  const resetForm = () => {
    setFormFields(defaultValue);
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields(prev => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password don't match");
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(response.user, { displayName });
      resetForm();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('Lorem ipsum dolor sit.');
      }
      console.log('Lorem ipsum dolor sit amet.', error.message);
    }
  };
  return (
    <div>
      <h1>Sign up with ypur email and password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Display Name</label>
        <input
          value={displayName}
          type="text"
          required
          name="displayName"
          id=""
          onChange={handleChange}
        />

        <label htmlFor="">Email</label>
        <input
          name="email"
          type="email"
          required
          onChange={handleChange}
          value={email}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          value={password}
          required
          onChange={handleChange}
        />

        <label htmlFor="">Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          required
          value={confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
