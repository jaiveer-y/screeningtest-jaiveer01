import React, { useState } from "react";
import Axios from "axios";


function Login() {
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");

  const register = () => {
    Axios.post("http://localhost:3500/register", {
      email: emailReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3500/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (!response.data.message) {
        setAuth(true)
        window.location = '/search';
      } else {
        setLoginStatus("failed");
      }
    });
  };

  console.log(loginStatus);
  return (
    <div className="Login" style={{ display: "flex", flexDirection: "column" }}>
      <form>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
        />
        <button type="submit" onClick={login}>
          Submit
        </button>
        <h1> {loginStatus}</h1>
      </form>

      <form>
        <h1>Register</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
        />
        <button type="submit" onClick={register}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
