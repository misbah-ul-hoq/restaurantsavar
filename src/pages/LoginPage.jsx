import { useContext, useEffect, useState } from "react";
import authBg from "../assets/others/authentication.png";
import auth2 from "../assets/others/authentication2.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import useDocumentTitle from "dynamic-title-react";
import generateCaptcha from "captcha-generator-react";

const LoginPage = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userCaptcha, setUserCaptcha] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const { emailLogIn, googleLogin } = useContext(AuthContext);
  useDocumentTitle("Login page");
  useEffect(() => {
    if (userCaptcha == captcha.captchaText) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [userCaptcha, captcha.captchaText]);

  const reloadCaptcha = () => {
    setCaptcha(generateCaptcha(7));
    setDisabled(true);
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {})
      .catch(() => {});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    emailLogIn(email, password)
      .then(() => {})
      .catch(() => {});
  };

  return (
    <section
      style={{ backgroundImage: `url(${authBg})` }}
      className="flex min-h-screen items-center justify-center"
    >
      <div className="container-center flex flex-col items-center gap-10 lg:flex-row">
        <div className="form w-full lg:w-auto lg:min-w-[550px]">
          <h2 className="mb-6 text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block">Email</label>
              <input
                type="email"
                className="w-full rounded border px-3 py-2"
                placeholder="Enter email"
                name="email"
              />
            </div>
            <div className="mb-4">
              <label className="block">Password</label>
              <input
                type="password"
                className="w-full rounded border px-3 py-2"
                placeholder="Enter your password"
                name="password"
              />
            </div>
            <div className="mb-4">
              <label className="block">Captcha</label>
              <div className="flex items-center">
                <img
                  src={captcha.captchaImage}
                  alt="captcha"
                  className="mr-4"
                />
                <button
                  type="button"
                  onClick={reloadCaptcha}
                  className="text-blue-500 underline"
                >
                  Reload Captcha
                </button>
              </div>
              <input
                type="text"
                className="mt-2 w-full rounded border px-3 py-2"
                placeholder="Type here"
                onChange={(e) => {
                  setUserCaptcha(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-secondary w-full py-2"
              disabled={disabled}
            >
              Sign In
            </button>
          </form>
          <button
            className="btn btn-primary btn-block mt-5"
            onClick={handleGoogleLogin}
          >
            Login with google
          </button>
          <p className="mt-4 text-center">
            New here?
            <Link to="/signup" className="pl-3 text-yellow-500 underline">
              Create a New Account
            </Link>
          </p>
        </div>

        <div className="img lg:-order-1">
          <img src={auth2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
