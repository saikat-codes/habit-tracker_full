import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const HabitCard = ({ habits, onAdd, onDelete, onDone }) => {
  const [newHabit, setNewHabit] = useState('');

  const handleAdd = () => {
    if (newHabit.trim() !== '') {
      onAdd(newHabit);
      setNewHabit('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  const triggerConfetti = () => {
    const randomInRange = (min, max) => Math.random() * (max - min) + min;
    confetti({
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      particleCount: randomInRange(50, 100),
      origin: { y: 0.6 },
    });
  };

  const handleDone = (id) => {
    onDone(id);
    triggerConfetti();
  };

  return (
    <div className="bg-[#00000038] backdrop-blur-xl border-2 border-solid border-white/10 rounded-2xl p-6 shadow-[7px_10px_20px_rgba(0,0,0,0.4)] flex flex-col w-full h-full overflow-hidden text-lg">
      
      <div className="text-box text-[#f1f1f1] flex justify-center items-center mb-6 w-full gap-4 shrink-0">
        <input 
          type="text" 
          className='flex-1 min-w-0 px-4 text-base rounded-xl outline-none border-2 border-solid font-jetbrains border-white/10 backdrop-blur-xl bg-white/5 h-11 focus:border-white/35 focus:shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all placeholder:text-base text-white' 
          placeholder='Add a Habit...'
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button 
          className='rounded-full border-2 border-white/10 h-11 w-11 backdrop-blur-2xl bg-white/5 text-lg cursor-pointer shrink-0 font-extrabold hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center text-white'
          onClick={handleAdd}
        >
          ＋
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {habits.length > 0 ? (
          habits.map((habit) => (
            <div 
              key={habit.id} 
              className="flex items-center justify-between bg-white/5 border border-white/10 backdrop-blur-md p-3 rounded-xl mb-3 last:mb-0 transition-all hover:bg-white/10 overflow-auto"
            >
              <p className={`text-[#f1f1f1] font-poppins text-base h-fit w-full wrap-break-word pr-3 uppercase font-bold ${habit.completed ? 'line-through opacity-40' : ''}`}>
                {habit.text}
              </p>
              
              <div className="flex shrink-0">
                <button 
                  onClick={() => onDelete(habit.id)} 
                  className="text-[12px] uppercase tracking-wider bg-red-500/10 text-red-400 px-2 py-1 rounded-md border border-red-500/20 mr-1.5 transition-all hover:bg-red-500/30 active:scale-90 cursor-pointer font-poppins font-bold"
                >
                  Delete
                </button>
                <button 
                  onClick={() => handleDone(habit.id)}
                  disabled={habit.completed} 
                  className="text-[12px] uppercase tracking-wider bg-green-500/10 text-green-400 px-2 py-1 rounded-md border border-green-500/20 cursor-pointer hover:bg-green-500/30 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed font-poppins font-bold"
                >
                  {habit.completed ? 'Done' : 'Done'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-white/30 italic text-sm font-inter">No habits yet. Type above to begin.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HabitCard;