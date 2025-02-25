import React, { useState } from "react";
import { motion } from "framer-motion";
import BgImg from "../../assets/bg-hero.png";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-gray-100 to-gray-100"
      // style={{
      //   backgroundImage: `url(${BgImg})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="w-1/2 bg-transparent flex flex-col items-center justify-center p-10">
        <motion.h3
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-5xl font-bold text-gray-700 text-center mb-6"
          style={{
            fontFamily: "'Merriweather', serif",
            lineHeight: "1.3",
          }}
        >
          Employee Task Manager.
        </motion.h3>

        <p
          className="text-lg font-bold text-emerald-600 text-center mb-8"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          "Streamline your workflow, achieve more. Manage tasks with ease!"
        </p>
      </div>

      <div className="flex w-2/4 h-4/5 bg-white shadow-2xl rounded-2xl mr-5 overflow-hidden">
        <div className="w-full flex flex-col items-center justify-center px-10">
          {isSignUp ? (
            // Sign Up Form
            <>
              <h2
                className="text-3xl font-bold text-emerald-600 mb-4"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Create an Account!
              </h2>
              <p
                className="text-gray-600 text-center text-lg mb-8"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Sign up to start managing your tasks.
              </p>
              <form className="flex flex-col w-full">
                <input
                  required
                  className="outline-none bg-gray-100 placeholder-gray-400 border-[1.5px] border-emerald-600 py-3 text-xl px-5 rounded-xl mb-4"
                  type="text"
                  placeholder="Enter Your Name"
                />
                <input
                  required
                  className="outline-none bg-gray-100 placeholder-gray-400 border-[1.5px] border-emerald-600 py-3 text-xl px-5 rounded-xl mb-4"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <input
                  required
                  className="outline-none bg-gray-100 placeholder-gray-400 border-[1.5px] border-emerald-600 py-3 text-xl px-5 rounded-xl mb-6"
                  type="password"
                  placeholder="Create a Password"
                />
                <button className="w-full text-white bg-emerald-600 py-3 text-xl rounded-full hover:bg-emerald-700 transition">
                  Sign Up
                </button>
              </form>

              <div className="mt-8 text-center text-sm text-gray-500">
                <span>Already have an account?</span>
                <button
                  onClick={() => setIsSignUp(false)}
                  className="text-emerald-600 font-semibold hover:underline ml-2"
                >
                  Login
                </button>
              </div>
            </>
          ) : (
            // Login Form
            <>
              <h2
                className="text-3xl font-bold text-emerald-600 mb-4"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Welcome Back!
              </h2>
              <p
                className="text-gray-600 text-center text-lg mb-8"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Login to manage your tasks and productivity.
              </p>

              <form onSubmit={submitHandler} className="flex flex-col w-full">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="outline-none bg-gray-100 placeholder-gray-400 border-[1.5px] border-emerald-600 py-3 text-xl px-5 rounded-xl mb-4"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="outline-none bg-gray-100 placeholder-gray-400 border-[1.5px] border-emerald-600 py-3 text-xl px-5 rounded-xl mb-6"
                  type="password"
                  placeholder="Enter Your Password"
                />
                <button className="w-full text-white bg-emerald-600 py-3 text-xl rounded-full hover:bg-emerald-700 transition">
                  Login
                </button>
              </form>

              <div className="mt-8 text-center text-sm text-gray-500">
                <span>Don't have an account?</span>
                <button
                  onClick={() => setIsSignUp(true)}
                  className="text-emerald-600 font-semibold hover:underline ml-2"
                >
                  Sign Up
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
