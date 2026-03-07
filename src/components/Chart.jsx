import React from "react";
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

export function Chart({ habits = [] }) {
  const totalHabits = habits.length;
  const completedHabits = habits.filter(habit => habit.completed).length;

  const generateMonthlyData = () => {
   completedHabits
  };

  const chartData = generateMonthlyData();

  return (
    
    <div className="w-full h-full flex flex-col min-h-0">
      <div className="flex-1 w-full min-h-0"> 
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={chartData} 
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#ffffff05" />
            
            <XAxis 
              dataKey="day" 
              stroke="#ffffff30" 
              fontSize={9} 
              tickLine={false} 
              axisLine={false}
              interval={5} 
              dy={10} 
            />
            
            <YAxis 
              stroke="#ffffff30" 
              fontSize={9} 
              tickLine={false} 
              axisLine={false}
              allowDecimals={false}
              domain={[0, Math.max(totalHabits + 2, 5)]}
            />

            <Tooltip 
              cursor={{ fill: '#ffffff05' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-[#121212] border border-white/10 p-2 rounded-lg shadow-2xl backdrop-blur-md">
                      <p className="text-[9px] text-white/40 uppercase font-bold">{payload[0].payload.day}</p>
                      <p className="text-xs text-purple-400 font-extrabold">
                        {payload[0].value} / {payload[0].payload.total} Done
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />

            <Bar 
              dataKey="completed" 
              fill="url(#purpleGradient)" 
              radius={[4, 4, 0, 0]} 
            />

            <defs>
              <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a855f7" stopOpacity={1} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0.6} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}