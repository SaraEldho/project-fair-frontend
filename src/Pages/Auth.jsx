import React from "react";
import { Link } from "react-router-dom";

function Auth({ register }) {
  return (
    <div>
      <div className="row">
        <div className="col-lg-6 text-center p-5">
          <img
            src="https://i.pinimg.com/originals/62/20/82/6220827c5e3a593dba70155c2a0bc72a.gif"
            alt=""
            width={"600px"}
          />
        </div>
        <div className="col-lg-6">
          <form className="shadow m-5">
            <h2 className="text-center m-5">Project Fair </h2>
            <h4 className="text-center mb-3">
              {register ? "Register Here..." : "Login Here..."}
            </h4>
            <div className="p-5">
              {register && (
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control mb-3"
                />
              )}
              <input
                type="email"
                placeholder="Email"
                className="form-control mb-3"
              />
              <input
                type="password"
                placeholder="Password"
                className="form-control"
              />
            </div>
            <div className="text-center ">
              {register ? (
                <div>
                  <button className="btn btn-light mb-4 p-2">Register </button>
                  <p className="mb-5">
                    Already Registered?
                    <Link to={"/login"}>&nbsp;Login here</Link>
                  </p>
                </div>
              ) : (
                <div>
                  <button className="btn btn-light mb-5 p-">Login</button>
                  <p className="mb-5">
                    New to Here?
                    <Link to={"/register"}>&nbsp;Register here</Link>
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
