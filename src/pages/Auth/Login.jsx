import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
const Login = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ZKC media</h1>
          <h6>Explore the idea throught the world</h6>
        </div>
      </div>
      <LoginForm />
    </div>
  );
};
function LoginForm() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Login</h3>
         
        <div>
          <input
            type="text"
            placeholder="User name"
            className="infoInput"
            name="username"
          />
          
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
           
        </div>
         <div>
             <span style={{fontSize: '12px'}}>
                 No Account . Register!
             </span>
           
         </div>
         <button className="button infoButton" type="submit">Sign Up</button>
      </form>
    </div>
  );
}
export default Login;
