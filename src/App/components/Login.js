import React from 'react';
import GoogleButton from 'react-google-button';

/*
No formatting, needs help and guidance and love
*/
const Login = () => (
  <div id="landing">
    <img
      id="logo"
      src="https://res.cloudinary.com/dfu8r9blo/image/upload/v1606164894/HangerImages/HangerTextLogo_qnxaho.png"
      alt="hangerLogo"
    />
    <h1 id="subheading">A new way to clean your closet</h1>
    {/* <a href="/auth/google">google</a> */}
    <div id="google">
      <a href="/auth/google">
        <GoogleButton type="light" />
      </a>
    </div>
    <br />
    {/* <a href="/auth/facebook">facebook</a> */}
  </div>
);

export default Login;

/*

    <div
      class="fb-login-button"
      data-size="large"
      data-button-type="continue_with"
      data-layout="default"
      data-auto-logout-link="false"
      data-use-continue-as="false"
      data-width=""
    ></div>
    <div class="g-signin2" data-onsuccess="onSignIn"></div>

    */
