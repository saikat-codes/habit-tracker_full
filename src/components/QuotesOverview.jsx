import {useEffect, useState } from "react";

const QUOTES = [
  { text: "Small habits compound into big results.", author: "James Clear" },
  { text: "Consistency beats intensity.", author: null },
  {
    text: "Discipline is choosing what you want most over what you want now.",
    author: null,
  },
  {
    text: "You don’t rise to the level of your goals. You fall to the level of your systems.",
    author: "James Clear",
  },
  {
    text: "What you do every day matters more than what you do once in a while.",
    author: null,
  },
  {
    text: "Motivation gets you started. Systems keep you going.",
    author: null,
  },
  {
    text: "Your habits are a vote for the person you’re becoming.",
    author: "James Clear",
  },
  { text: "Focus on showing up, not on being perfect.", author: null },
  { text: "Small progress is still progress.", author: null },
  { text: "You only need to be consistent, not exceptional.", author: null },
  { text: "Habits reduce the need for willpower.", author: null },
  {
    text: "Success is built quietly, one repeatable action at a time.",
    author: null,
  },
  { text: "If it’s easy to do, it’s easy to repeat.", author: null },
  { text: "Environment beats motivation every time.", author: null },
  {
    text: "What feels insignificant today becomes powerful over time.",
    author: null,
  },
  { text: "You don’t need more time, you need fewer decisions.", author: null },
  {
    text: "Make the habit obvious before you make it ambitious.",
    author: null,
  },
  { text: "Consistency is a form of patience.", author: null },
  { text: "A streak is just evidence of identity.", author: null },
  { text: "Progress happens when action becomes automatic.", author: null },
  {
    text: "Design your habits like you design software: simple and repeatable.",
    author: null,
  },
  { text: "You’re not behind. You’re building.", author: null },
  { text: "Momentum is created by showing up when it’s boring.", author: null },
  { text: "The goal is reliability, not intensity.", author: null },
  { text: "Habits work best when they feel almost too easy.", author: null },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act but a habit.",
    author: "Aristotle",
  },
  { text: "First we form habits, then habits form us.", author: "John Dryden" },
  {
    text: "The chains of habit are too light to be felt until they are too heavy to be broken.",
    author: "Warren Buffett",
  },
  {
    text: "You’ll never change your life until you change something you do daily.",
    author: "John C. Maxwell",
  },
  {
    text: "Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn",
  },
  {
    text: "Success is nothing more than a few simple disciplines practiced every day.",
    author: "Jim Rohn",
  },
  {
    text: "Habits are the compound interest of self-improvement.",
    author: "James Clear",
  },
  { text: "Quality is not an act, it is a habit.", author: "Aristotle" },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  {
    text: "Small deeds done are better than great deeds planned.",
    author: "Peter Marshall",
  },
  { text: "You become what you do repeatedly.", author: null },
  { text: "Consistency creates trust with yourself.", author: null },
  { text: "Make it easy to start, and hard to stop.", author: null },
  { text: "A routine is a form of self-respect.", author: null },
  { text: "Behavior changes faster than motivation.", author: null },
];

export function QuotesOverview() {
  const [quote, setQuote] = useState(null);
   const indexPicker = (QUOTES) => {
    const index = Math.floor(Math.random() * QUOTES.length);
      return index;
   }

  useEffect(() => {
    if (!QUOTES.length)return;
     const index = indexPicker(QUOTES)
    setQuote(QUOTES[index]);
  }, []);

  if (!quote) return null;

  return (
    <div
      className="
      w-full h-full
      p-8 rounded-3xl
      bg-white/5 backdrop-blur-xl
      border border-white/10
      flex flex-col
    "
    >
      <div className="flex flex-col gap-0.5 mb-3">
        <h2 className="text-white text-lg font-bold font-space tracking-tight">
          Daily Motivation
        </h2>
        <p className="text-white/60 font-poppins text-xs">Stay consistent</p>
      </div>

      <div className="flex-1 flex items-center justify-center text-center px-1">
        <div className="max-w-sm">
          <p className="text-white/85 text-sm md:text-base leading-snug font-medium font-poppins">
            “{quote.text}”
          </p>

          {quote.author && (
            <p className="mt-2 text-white/45 text-xs italic">
              — {quote.author}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
