import React, { useState } from 'react';

const defaultValue = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultValue);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields(prev => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div>
      <h1>Sign up with ypur email and password</h1>
      <form onSubmit={() => {}}>
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
