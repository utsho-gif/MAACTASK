import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <div class="text-center ">
          <h1 class="text-5xl font-bold">Login now!</h1>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <form>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <input
                  className="btn w-full max-w-xs mt-3"
                  type="submit"
                  value="Login"
                />
            </form>
            <p className="mt-3">
              <small>
                {" "}
                New to MAAC?{" "}
                <Link to="/signup" className="text-primary uppercase">
                  Create an account
                </Link>
              </small>
            </p>
            <div class="divider">OR</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;