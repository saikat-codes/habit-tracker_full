import React from "react"
import { QuotesOverview } from "./components/QuotesOverview"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import HabitCard from "./components/HabitCard";
import { ProgressBar } from "./components/ProgressBar";

function Dashboard() {
  return (
    <div className="bg-[url('assets/background.png')] bg-cover bg-center h-screen w-screen p-4 box-border overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-5 gap-3 w-full h-full mx-auto">
        <div className="md:col-span-2 md:row-span-5 flex flex-col gap-3 min-h-0 w-full">
         
          <div className="h-[80%] w-full bg-[#00000038] backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 shadow-xl flex items-center justify-center text-white text-2xl font-semibold overflow-hidden">
            <HabitCard />
          </div>

          <div className="flex-1 w-full bg-[#00000038] backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 shadow-xl flex items-center justify-center text-white font-semibold">
            <ProgressBar/>
          </div>
        </div>

        <div className="md:col-start-5 md:row-start-1 bg-[#00000038] backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 shadow-xl flex items-center justify-center text-white font-semibold min-h-0">
          logout card
        </div>

        <div className="md:col-start-5 md:row-start-2 bg-[#00000038] backdrop-blur-xl border-2 border-white/10 rounded-2xl shadow-xl overflow-hidden min-h-0">
          <QuotesOverview />
        </div>

        <div className="md:col-start-3 md:row-start-1 md:col-span-2 md:row-span-2 bg-[#00000038] backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 shadow-xl flex items-center justify-center text-white font-semibold min-h-0">
          calender
        </div>

        <div className="md:col-start-3 md:row-start-3 md:col-span-3 md:row-span-3 bg-[#00000038] backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 shadow-xl flex items-center justify-center text-white font-semibold min-h-0">
          chart
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}