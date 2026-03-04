import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <>
      <div className="bg-[url('assets/background.png')] bg-cover bg-center h-screen w-screen flex items-center justify-center p-4 overflow-hidden">
       
        <div className="w-full max-w-5xl bg-[#00000038] backdrop-blur-2xl border-2 border-white/10 rounded-3xl flex flex-col md:flex-row overflow-hidden shadow-2xl">
         
          <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center p-12 text-center border-r border-white/10 bg-white/5">

            <div className="relative">
              <img
                src="login-final.png"
                alt="Illustration"
                className="w-72 h-72 object-contain mb-8 drop-shadow-2xl rounded-xl border-white/10 border-2"
              />
            </div>

            <h2 className="text-white text-3xl font-extrabold tracking-tight font-space mb-4">
              Discipline made simple.
            </h2>

            <p className="text-white/60 text-sm max-w-xs font-poppins font-bold">
              Turn daily actions into lasting results with smarter habit
              tracking.
            </p>
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            <div className="mb-10 text-center md:text-left">
              <h1 className="text-white text-2xl font-extrabold tracking-tight font-poppins capitalize">
                Login to Your Account
              </h1>
              <p className="text-white/50 text-xs mt-2 uppercase tracking-widest font-extrabold">
                Pick up right where you left off
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <label className="text-white/80 text-xs font-medium ml-1">
                  Email
                </label>
                {/* <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm"
                placeholder="mail@website.com"
              /> */}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-white/80 text-xs font-medium ml-1">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-white/40 text-[10px] hover:text-white transition-colors"
                  >
                    Forgot Password?
                  </button>
                </div>
                {/* <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm"
                placeholder="Min. 8 characters"
              /> */}
              </div>

              
              <button
                type="submit"
                className="w-full bg-white/90 hover:bg-white text-black font-bold py-3 rounded-xl shadow-lg transform transition active:scale-[0.98] mt-2 font-poppins"
              >
                Login
              </button>
            </form>

            <div className="mt-10 text-center">
              <p className="text-white/40 text-xs">
                Not Registered Yet?{" "}
                <span className="text-white font-bold cursor-pointer hover:underline">
                  Create an account
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}