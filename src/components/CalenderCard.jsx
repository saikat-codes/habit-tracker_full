

import React, { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export function CalendarCard() {
  const [date, setDate] = useState(new Date())

  const completedDays = [
    new Date(2026, 0, 20),
    new Date(2026, 0, 22),
    new Date(2026, 0, 25),
  ]

  return (
    <div className="w-full h-full p-4"> 
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          // 1. Added w-full to the root
          className="bg-transparent border-none p-0 w-full" 
          classNames={{
            months: "w-full flex flex-col gap-5",
            month: "w-full space-y-5",
            caption: "flex justify-center pt-1 relative items-center text-white",
            caption_label: "text-base font-space text-xl font-bold text-white",
            nav: "space-x-1 flex items-center",
            nav_button: "h-8 w-8 bg-white/10 hover:bg-white/20 border-none text-white rounded-full transition-colors",

            table: "w-full border-collapse", // 2. Ensure table takes full width
            head_row: "flex w-full justify-between", 
            head_cell: "text-white/60 rounded-md flex-1 font-normal text-[0.75rem] text-center",

            row: "flex w-full mt-2 justify-between",

            // 3. Changed cell and day to use flex-1 and responsive sizing
            cell: "relative p-0 flex-1 flex justify-center items-center focus-within:z-20",
            day: "h-10 w-full max-w-[45px] p-0 font-normal text-white hover:bg-white/10 rounded-xl transition-all font-inter",

            day_selected: "bg-violet-500/25 text-white hover:bg-violet-500/35 !opacity-100",
            day_today: " text-white ",
            day_outside: "text-white/20 opacity-50",
            day_disabled: "text-white/20 opacity-40",
          }}
          modifiers={{ completed: completedDays }}
          modifiersStyles={{
            completed: {
              backgroundColor: "rgba(168, 85, 247, 0.45)",
              color: "white",
              fontWeight: 600,
              borderRadius: "0.75rem",
              boxShadow: "0 0 10px rgba(168,85,247,0.6)",
            },
          }}
        />
      </div>
  )
}
