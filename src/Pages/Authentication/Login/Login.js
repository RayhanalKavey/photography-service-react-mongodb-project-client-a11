import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const { setUser, logIn, googleLogin } = useContext(AuthContext);

  //------------- redirect user
  const navigate = useNavigate();
  //------------- user location where they want to go
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //LogIn/sign up with google
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Logged in successfully!!");

        //Navigate user to the desired path
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    //Log In with email and password
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(from, { replace: true });
        toast.success("User logged in successfully.");
        //  form.reset();
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  return (
    <div className="hero w-full my-20 ">
      <div className="hero-content ">
        <div className="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100 py-10">
          <h1 className="text-5xl font-bold text-center ">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {/* Password reset */}
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-secondary"
                type="submit"
                value="Login"
              />
            </div>
            <button onClick={handleGoogleLogin}>Google</button>
          </form>
          <p className="text-center text-slate-500	">
            New to genius car?{" "}
            <Link className="text-[#2c2e2e] font-bold " to={"/signup"}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;