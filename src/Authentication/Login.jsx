import React, { useEffect, useState } from "react";
// import './styles.css/';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("Sign In Data:", email, password);
    form.reset();
    window.location.href = "/";

  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    const rewritePassword = form.rewritePassword.value;
    const roll = form.roll.value;
    form.reset();
    window.location.href = "/";


    console.log(
      "Sign Up Data:",
      fullName,
      email,
      password,
      rewritePassword,
      roll
    );
  };

  return (
    <div>
      <div className="login">
        <div className=" ">
          {!isSignIn ? (
            <div className="flex justify-center h-screen items-center bg-[#105aa0]">
              <div className="lg:h-[450px] lg:w-[510px] lg:bg-[#F9F6EE] lg:shadow-xl  lg:px-10 px-4 lg:pb-10 lg:pt-6 rounded-xl bg-white pb-4 mx-4  shadow-xl">
                <div className="flex flex-col items-center justify-center">
                  <h3>
                    <VscAccount className="text-3xl" />
                  </h3>
                  <h2 className="text-[#373536] lg:text-[22px] text-[20px] font-space_grotesk font-bold py-2 pb-3">
                    Sign In Your Account
                  </h2>
                </div>
                <div>
                  <form
                    onSubmit={handleSignIn}
                    className="w-full text-[#373536] "
                  >
                    <div className="mb-3">
                      <label htmlFor="phone" className="block font-bold">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="abc@gmail.com"
                        className="w-full hover:cursor-pointer h-[45px] px-4 py-[2px] border border-[#E1E1E1] rounded-md bg-[#EFF7F9] text-[rgba(55, 53, 54, 0.30)] "
                        required
                      />
                    </div>
                    <div className="mb-3 relative">
                      <label htmlFor="name" className="block font-bold text-[]">
                        Password
                      </label>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="***********"
                        className="w-full hover:cursor-pointer h-[45px] px-4 py-[2px]  border border-[#E1E1E1] rounded-md bg-[#EFF7F9] text-[rgba(55, 53, 54, 0.30)] "
                        required
                      />
                      <div className="absolute right-6 bottom-6">
                        <button
                          type="button"
                          className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                          onClick={() =>
                            setShowPassword((prevShow) => !prevShow)
                          }
                        >
                          {showPassword ? (
                            <FiEyeOff className="text-lg" />
                          ) : (
                            <FiEye className="text-lg" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <p className="text-[#373536] lg:text-[16px] text-[12px] font-montserrat ">
                        <input
                          type="checkbox"
                          value=""
                          className="pr-3 transform scale-125"
                        />{" "}
                        Remember My Preference
                      </p>
                      <h2 className="text-[#F26924] lg:text-[16px] text-[12px] font-bold font-montserrat hover:cursor-pointer">
                        Forgot Password?
                      </h2>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full hover:bg-[#115e38]  hover:cursor-pointer bg-[#00B860] py-3 text-[#FFF] lg:text-[18px] font-bold rounded-xl my-4 "
                      >
                        Sign In
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <h2 className="text-[#373536] lg:text-[16px] font-montserrat ">
                        Don't have an account?
                      </h2>
                      <button
                        onClick={() => setIsSignIn(true)}
                        className="text-[#F26924] lg:text-[16px] font-semibold font-montserrat  hover:text-red-700 hover:lg:text-[16px]"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center h-screen items-center bg-[#105aa0]">
              <div className="lg:h-[640px] lg:w-[570px] lg:bg-[#F9F6EE] lg:shadow-xl lg:px-8 px-4 lg:py-5 rounded-xl bg-white shadow-xl mx-4 py-4">
                <div className="flex flex-col items-center justify-center">
                  <h3>
                    <VscAccount className="text-3xl" />
                  </h3>{" "}
                  <h2 className="text-[#373536] lg:text-[22px] font-space_grotesk font-bold py-2 pb-3">
                    Sign Up Your Account
                  </h2>
                </div>
                <div>
                  <form
                    onSubmit={handleSignUp}
                    className="w-full text-[#373536] "
                  >
                    <div className="mb-2">
                      <label htmlFor="phone" className="block font-bold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="w-full hover:cursor-pointer h-[45px] px-4 py-[2px] border border-[#E1E1E1] rounded-md bg-[#EFF7F9] text-[rgba(55, 53, 54, 0.30)]"
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="phone" className="block font-bold">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="abc@gmail.com"
                        className="w-full hover:cursor-pointer h-[45px] px-4 py-[2px] border border-[#E1E1E1] rounded-md bg-[#EFF7F9] text-[rgba(55, 53, 54, 0.30)]"
                        required
                      />
                    </div>
                    <div className="mb-2 relative">
                      <label htmlFor="name" className="block font-bold text-[]">
                        Password
                      </label>
                      <input
                        type={showPassword1 ? "text" : "password"}
                        name="password"
                        placeholder="***********"
                        className="w-full hover:cursor-pointer h-[45px] px-4 py-[2px] border border-[#E1E1E1] rounded-md bg-[#EFF7F9] text-[rgba(55, 53, 54, 0.30)]"
                        required
                      />
                      <div className="absolute right-6 bottom-6">
                        <button
                          type="button"
                          className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                          onClick={() =>
                            setShowPassword1((prevShow) => !prevShow)
                          }
                        >
                          {showPassword1 ? (
                            <FiEyeOff className="text-xl" />
                          ) : (
                            <FiEye className="text-xl" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="mb-2 relative">
                      <label htmlFor="name" className="block font-bold text-[]">
                        Rewrite Password
                      </label>
                      <input
                        type={showPassword2 ? "text" : "password"}
                        name="rewritePassword"
                        placeholder="***********"
                        className="w-full hover:cursor-pointer h-[45px] px-4 py-[2px] border border-[#E1E1E1] rounded-md bg-[#EFF7F9] text-[rgba(55, 53, 54, 0.30)]"
                        required
                      />
                      <div className="absolute right-6 bottom-6">
                        <button
                          type="button"
                          className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                          onClick={() =>
                            setShowPassword2((prevShow) => !prevShow)
                          }
                        >
                          {showPassword2 ? (
                            <FiEyeOff className="text-xl" />
                          ) : (
                            <FiEye className="text-xl" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="mb-2">
                      <label htmlFor="phone" className="block font-bold">
                        Roll
                      </label>
                      <input
                        type="text"
                        name="roll"
                        placeholder="..."
                        className="w-full hover:cursor-pointer h-[45px] px-4 py-[2px] border border-[#E1E1E1] rounded-md bg-[#EFF7F9] text-[rgba(55, 53, 54, 0.30)]"
                        required
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-[#00B860] py-3 text-[#FFF] lg:text-[18px] font-bold rounded-xl my-3 hover:bg-[#115e38]  hover:cursor-pointer "
                      >
                        Sign Up
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <h2 className="text-[#373536] lg:text-[16px] font-montserrat ">
                        Already have an account?
                      </h2>
                      <button
                        onClick={() => setIsSignIn(false)}
                        className="text-[#F26924] hover:text-red-700 hover:lg:text-[17px] lg:text-[16px] font-semibold font-montserrat"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
