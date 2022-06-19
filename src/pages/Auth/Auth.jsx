import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ZKC media</h1>
          <h6>Explore the idea throught the world</h6>
        </div>
      </div>
      <Signup />
    </div>
  );
};
function Signup() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>SignUp</h3>
        <div>
          <input
            type="text"
            placeholder="First name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last name"
            className="infoInput"
            name="lastname"
          />
        </div>
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
           <input
            type="text"
            placeholder="Confirm password"
            className="infoInput"
            name="confirmpass"
          />
        </div>
         <div>
             <span style={{fontSize: '12px'}}>
                 Already have an account . Login!
             </span>
           
         </div>
         <button className="button infoButton" type="submit">Sign Up</button>
      </form>
    </div>
  );
}
export default Auth;
