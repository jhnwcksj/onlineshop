import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <section className="signup-section">
      <div className="containerrr">
        <h2>Sign Up</h2>

        <form className="signup-form">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
