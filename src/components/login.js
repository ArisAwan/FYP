import React from "react";
// import $ from 'jquery';
// import Popper from 'popper.js';
import { useState } from "react";

const Login = ({ contract, account, provider }) => {
  //Getting data from form and storing it
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name; //to see which input field is being targeted

    const value = e.target.value; //to get value of targeted input

    setUserLogin({ ...userLogin, [name]: value }); // Setting value in the varialbles
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //Prevents forms default behaviour on submitting that is refreshing the form
    //code to send data to blockchain
    let signin_confirmation = contract.signin(
      userLogin.email,
      userLogin.password
    );
    console.log("returningggg from sign in", signin_confirmation);
    if (signin_confirmation) {
      alert("successfully login");
    } else {
      alert("first login");
    }
  };
  //-----------------------------------------------------------------------------------------------------------

  return (
    <div className="container my-8">
      <div className="title">Login</div>
      <form action="" onSubmit={handleSubmit}>
        <div className="user-details">
          <div className="form-group input-box">
            <label htmlFor="email" className="reg-field-label">
              Email :
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              placeholder="email@provider.com"
              required
              value={userLogin.email}
              onChange={handleInput}
            />
          </div>

          <div className="form-group input-box">
            <label htmlFor="password" className="reg-field-label">
              Password :
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              autoComplete="off"
              required
              value={userLogin.password}
              onChange={handleInput}
            />
          </div>
        </div>

        <div className="button">
          <input type="submit" name="login" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
