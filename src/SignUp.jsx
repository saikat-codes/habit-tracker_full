import { useNavigate as navigate } from "react-router-dom";

export default function Signup() {
  

  return (
    <div className="bg-[url('assets/background.png')] bg-cover bg-center h-screen w-screen flex items-center justify-center p-4 overflow-hidden">
      
      <div className="w-full max-w-5xl bg-[#00000038] backdrop-blur-2xl border-2 border-white/10 rounded-3xl flex flex-col md:flex-row overflow-hidden shadow-2xl">
        
        <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center p-12 text-center border-r border-white/10 bg-white/5">
          <div className="relative">
            <img
              src="signup.png" 
              alt="Start Journey"
              className="w-75 h-75 object-contain mb-8 drop-shadow-2xl rounded-xl"
            />
          </div>

          <h2 className="text-white text-3xl font-extrabold tracking-tight font-space mb-4">
            Start Your Journey.
          </h2>

          <p className="text-white/60 text-sm max-w-xs font-poppins font-bold">
            Join thousands of others turning small habits into massive life changes.
          </p>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-white text-2xl font-extrabold tracking-tight font-poppins capitalize">
              Create New Account
            </h1>
            <p className="text-white/50 text-xs mt-2 uppercase tracking-widest font-extrabold">
              Step into a more disciplined version of you
            </p>
          </div>

          <form className="space-y-4">
            <div className="space-y-1">
              <label className="text-white/80 text-xs font-medium ml-1">Full Name</label>
              <input
                type="text"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm font-poppins font-bold"
                placeholder="John Doe"
                />
            </div>

            <div className="space-y-1">
              <label className="text-white/80 text-xs font-medium ml-1">Email</label>
              <input
                type="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm font-jetbrains font-bold"
                placeholder="someone@gmail.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-white/80 text-xs font-medium ml-1">Password</label>
                <input
                  type="password"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm"
                  placeholder="••••••••"
                />
              </div>
              <div className="space-y-1">
                <label className="text-white/80 text-xs font-medium ml-1">Confirm</label>
                <input
                  type="password"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-white/90 hover:bg-white text-black font-bold py-3 rounded-xl shadow-lg transform transition active:scale-[0.98] mt-4 font-poppins hover:cursor-pointer"
            >
              Create Account
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-white/40 text-xs">
              Already have an account?{" "}
              <span 
                onClick={() => navigate("/login")}
                className="text-white font-bold cursor-pointer hover:underline"
              >
                Login here
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}