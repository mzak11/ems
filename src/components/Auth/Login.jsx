import React, { useState } from "react";
import { motion } from "framer-motion";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="flex w-3/4 h-4/5 bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Left Column - Login Card */}
        <div className="w-1/2 flex flex-col items-center justify-center p-10">
          <h2 className="text-3xl font-bold text-emerald-600 mb-3">Welcome Back!</h2>
          <p className="text-gray-500 mb-6">Login to continue your journey</p>
          <form onSubmit={submitHandler} className="flex flex-col w-full">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="outline-none bg-transparent placeholder-gray-400 border-[1.5px] border-emerald-600 py-3 text-xl px-5 rounded-xl mb-3"
              type="email"
              placeholder="Enter Your Email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="outline-none bg-transparent placeholder-gray-400 border-[1.5px] border-emerald-600 py-3 text-xl px-5 rounded-xl mb-4"
              type="password"
              placeholder="Enter Your Password"
            />
            <button className="w-full text-white bg-emerald-600 py-3 text-xl rounded-full hover:bg-emerald-700 transition">
              Login
            </button>
          </form>
        </div>

        {/* Right Column - Dribbling Ball Animation */}
        <div className="w-1/2 flex items-center justify-center bg-emerald-100 relative">
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            className="w-20 h-20 bg-emerald-600 rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
