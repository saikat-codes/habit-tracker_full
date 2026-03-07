import { Field, FieldLabel } from "@/components/ui/field"
import { Progress } from "@/components/ui/progress"

export function ProgressBar({ habits = [] }) {
  const total = habits.length;
  const completed = habits.filter(habit => habit.completed).length;
  let percentage;
  if(total === 0) percentage = 0;
  else percentage = Math.round((completed/total) * 100);

  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      <Field className="w-full flex flex-col gap-3">
        <FieldLabel 
          htmlFor="habit-progress" 
          className="flex justify-between items-end w-full"
        >
          <span className="text-white/70 text-xs uppercase tracking-[0.2em] font-poppins font-bold">
            Daily Progress
          </span>
          <span className="text-white text-xl font-jetbrains font-extrabold tabular-nums">
            {percentage}%
          </span>
        </FieldLabel>

        <div className="relative w-full">
      
          <Progress 
            value={percentage} 
            id="habit-progress" 
            className="h-3 rounded-full bg-white/5 border border-white/10 overflow-hidden"
          />
          
          <div 
            className="absolute top-0 left-0 h-full bg-linear-to-r from-violet-600 via-purple-500 to-fuchsia-400 rounded-full transition-all duration-700 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <p className="text-white/30 text-[10px] uppercase font-poppins font-bold tracking-wider mt-1">
          {completed} of {total} habits completed
        </p>
      </Field>
    </div>
  )
}