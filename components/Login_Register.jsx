import React from 'react';
// import styling from './login-signup.css';
// import Actions from './login-signup.js';

const Login_Register = () => {
  return (
    
      <div style={{styling}}>W
        <div class="wrapper">

          <div class="title-text">
            <div class="title login">Login Form</div>
            <div class="title signup">Signup Form</div>
          </div>

          <div class="form-container">
            <div class="slide-controls">
              <input type="radio" name="slider" id="login" checked />
              <input type="radio" name="slider" id="signup" />
              <label for="login" class="slide login">Login</label>
              <label for="signup" class="slide signup">Signup</label>
              <div class="slide-tab"></div>
            </div>

            <div class="form-inner">

              <form action="#" class="login">
                <div class="field">
                  <input type="text" placeholder="Email Address" required />
                </div>
                <div class="field">
                  <input type="password" placeholder="Password" required />
                </div>
                <div class="pass-link">
                  <a href="#">Forgot Password?</a>
                </div>
                <div class="field">
                  <input type="submit" value="login" />
                </div>
                <div class="signup-link">
                    Not a member? <a href="#">Signup now</a>
                </div>
              </form>

              <form action="#" class="signup">
                <div class="field">
                  <input type="text" placeholder="Email Address" required />
                </div>
                <div class="field">
                  <input type="password" placeholder="Password" required />
                </div>
                <div class="field">
                  <input type="password" placeholder="Confirm Password" required />
                </div>
                <div class="field">
                  <input type="submit" value="signup" />
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Forgot Password Modal */}
        <div class="modal">
          <div class="modal-content">
            <span class="close-modal-btn">&times;</span>
            <h2>Forgot Password?</h2>
            <p>Please enter your email address to reset your password.</p>
            <form>
              <div class="field">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div class="field">
                <input type="button" id="reset-password-btn" value="Reset Password" />
              </div>
            </form>
          </div>
        </div>

      </div>
    
  )
}

export default Login_Register;
