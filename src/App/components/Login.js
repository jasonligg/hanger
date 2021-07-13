import React from 'react';

/*
No formatting, needs help and guidance and love
*/

const Login = () => (
  <div>
    <h1> HI LOGIN WITH GOOGY or FACEBOOK</h1>
    <a href="/auth/google">google</a>
    <br />
    <a href="/auth/facebook">facebook</a>
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
