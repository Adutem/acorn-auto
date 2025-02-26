import { useState, useEffect } from "react";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const launchDate = new Date("2025-01-01").getTime();
    const now = new Date().getTime();
    const difference = launchDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white text-center p-5">
      <div className="max-w-lg w-full">
        <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg text-gray-300 mb-6">We're working hard to bring something amazing!</p>
        <div className="flex justify-center space-x-4 text-2xl font-semibold">
          <span>{timeLeft.days}d</span>
          <span>{timeLeft.hours}h</span>
          <span>{timeLeft.minutes}m</span>
          <span>{timeLeft.seconds}s</span>
        </div>
        <div className="mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l bg-gray-800 border border-gray-700 text-white focus:outline-none"
          />
          <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded-r">Notify Me</button>
        </div>
        <div className="flex justify-center space-x-4 mt-6 text-xl">
          <a href="#" className="hover:text-blue-400">🔵</a>
          <a href="#" className="hover:text-blue-400">🐦</a>
          <a href="#" className="hover:text-blue-400">📸</a>
        </div>
      </div>
    </div>
  );
}
