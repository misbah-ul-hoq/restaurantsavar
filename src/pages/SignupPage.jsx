import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupIllustrator from "../assets/others/authentication2.png";
import authBg from "../assets/others/authentication.png";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import api from "../api/api";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const { googleLogin, emailSignUp, updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const hanleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        api.post("/users", user);
      })
      .catch(() => {});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photoURL = form.get("photoURL");

    emailSignUp(email, password)
      .then(() => {
        api.post("/users", {
          displayName: name,
          email,
          password,
        });
        updateUser(name, photoURL).then(() => {
          Swal.fire({
            title: "Signup Successfull",
            icon: "success",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/login");
            }
          });
        });
      })
      .catch(() => {});
  };

  return (
    <section style={{ backgroundImage: `url(${authBg})` }} className="min-h-">
      <div className="container-center grid items-center gap-5 py-8 md:py-16 lg:grid-cols-2">
        <div className="illustrator lg:order-0 order-1 mx-auto">
          <img src={signupIllustrator} alt="" className="w-full" />
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-md space-y-6 rounded-lg">
            <h2 className="mt-6 text-center text-3xl font-extrabold">Signup</h2>
            <button
              className="btn btn-primary mt-2 w-full rounded-lg py-2 font-semibold text-white"
              onClick={hanleGoogleLogin}
            >
              <div className="flex items-center justify-center">
                <img
                  src="/google.svg"
                  alt="Google Logo"
                  className="mr-2 h-5 w-5 object-cover"
                />
                Sign up with Google
              </div>
            </button>
            <div className="divider">OR</div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="What should we call you?"
                  className="input input-bordered mt-1 block w-full rounded-lg bg-base-200 px-4 py-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered mt-1 block w-full rounded-lg bg-base-200 px-4 py-2"
                  required
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered mt-1 block w-full rounded-lg bg-base-200 px-4 py-2"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <img
                  src={`${showPassword ? "/eye-off.svg" : "/eye-on.svg"}`}
                  alt=""
                  className="absolute bottom-6 right-4 h-10"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                />
                <div className="mt-1 flex items-center gap-3 text-xs">
                  <span className="flex items-center">
                    <img
                      src={password.length >= 6 ? "/right.svg" : "/cross.svg"}
                      alt=""
                      className="h-5"
                    />
                    Minimum 6 characters
                  </span>
                  <span className="flex items-center">
                    <img
                      src={/[A-Z]/.test(password) ? "/right.svg" : "/cross.svg"}
                      alt=""
                      className="h-5"
                    />
                    One Uppercase
                  </span>
                  <span className="flex items-center">
                    <img
                      src={/[a-z]/.test(password) ? "/right.svg" : "/cross.svg"}
                      alt=""
                      className="h-5"
                    />
                    One lowercase
                  </span>
                </div>
              </div>
              <div>
                <label htmlFor="photoURL" className="block text-sm font-medium">
                  Photo URL
                </label>
                <input
                  type="text"
                  id="photoURL"
                  name="photoURL"
                  placeholder="Enter your photoURL"
                  className="input input-bordered mt-1 block w-full rounded-lg bg-base-200 px-4 py-2"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block text-white"
              >
                Create account
              </button>
            </form>

            <p className="mt-4 text-center text-sm">
              Already a member?{" "}
              <Link
                to="/login"
                className="font-medium text-secondary hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
