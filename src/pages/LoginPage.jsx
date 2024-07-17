import { useEffect, useState } from "react";
import { generateCaptcha } from "../functions/captcha";
import authBg from "../assets/others/authentication.png";
import auth2 from "../assets/others/authentication2.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  // const { captchaImage, captchaText } = generateCaptcha();
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userCaptcha, setUserCaptcha] = useState(null);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (userCaptcha == captcha.captchaText) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [userCaptcha, captcha.captchaText]);

  const reloadCaptcha = () => {
    setCaptcha(generateCaptcha());
    setDisabled(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("email");
    const password = form.get("password");
    console.log({ name, password });
  };

  return (
    <section
      style={{ backgroundImage: `url(${authBg})` }}
      className="flex min-h-screen items-center justify-center"
    >
      <div className="container-center flex items-center gap-10">
        <div className="form lg:min-w-[550px]">
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
