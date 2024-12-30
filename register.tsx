import React from 'react';
import './reg.css';
function RegisterPage() {
  return (
   
      <main className="main-container">
        <div className="register-container">
        
          <form className="register-form">
            <h2>Register</h2>
            <div className="form-group">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <div className="form-footer">
  <button type="submit" className="register-submit">Register</button>
  <p className="login-redirect">
    Already have an account?
     <a href="/login">Log in</a>
  </p>
</div>
          </form>
        </div>
      </main>
   
  );
}

export default RegisterPage;