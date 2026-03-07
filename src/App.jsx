import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import { CalendarCard, HabitCard, ProgressBar, QuotesOverview, Chart} from "./components";
import Signup from "./SignUp";

function Dashboard() {
  const [habits, setHabits] = useState([]);

  const addHabit = (text) => {
    const habit = { id: Date.now(), text, completed: false };
    setHabits([...habits, habit]);
  };

  const deleteHabit = (id) => {
    const remainingHabits = habits.filter(habit => habit.id !== id)
    setHabits(remainingHabits);
  };

  const markAsDone = (id) => {
    setHabits(habits.map(h => 
      h.id === id ? { ...h, completed: true } : h
    ));
  };

  return (
    <div className="bg-[url('assets/background.png')] bg-cover bg-center h-screen w-screen p-4 box-border overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-5 gap-3 w-full h-full mx-auto">
        <div className="md:col-span-2 md:row-span-5 flex flex-col gap-3 min-h-0 w-full">
          <div className="h-[80%] w-full bg-[#00000038] backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 shadow-xl flex items-center justify-center text-white text-2xl font-semibold overflow-hidden">
            <HabitCard
              habits={habits}
              onAdd={addHabit}
              onDelete={deleteHabit}
              onDone={markAsDone}
            />
          </div>

          <div className="flex-1 w-full bg-[#00000038] backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 shadow-xl flex items-center justify-center text-white font-semibold">
            <ProgressBar habits={habits} />
          </div>
        </div>

        <div className="md:col-start-5 md:row-start-1 bg-[#00000038] backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 shadow-xl flex items-center justify-center text-white font-semibold min-h-0">
          logout card
        </div>

        <div className="md:col-start-5 md:row-start-2 bg-[#00000038] backdrop-blur-xl border-2 border-white/10 rounded-2xl shadow-xl overflow-hidden min-h-0">
          <QuotesOverview />
        </div>

        <div className="md:col-start-3 md:row-start-1 md:col-span-2 md:row-span-2 bg-[#00000038] backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 shadow-xl flex items-center justify-center text-white font-semibold min-h-0">
          <CalendarCard />
        </div>

        <div className="md:col-start-3 md:row-start-3 md:col-span-3 md:row-span-3 bg-[#00000038] backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 shadow-xl flex flex-col items-start justify-start overflow-hidden">

          <span className="text-white/70 text-[14px] uppercase tracking-[0.2em] font-poppins font-extrabold mb-4">
            Activity Overview
          </span>

          <div className="flex-1 w-full min-h-0">
            <Chart habits={habits} />
          </div>
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
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}