import React from 'react';
import './SignIn.css';

const SignIn = () => {
  return (
    <section className="signin-section">
      <div className="containerr">
        <h2>Sign In</h2>

        <form className="signin-form">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <button type="submit">Sign In</button>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
