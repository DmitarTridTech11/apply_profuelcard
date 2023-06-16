import React, { useEffect, useState } from "react";

const Confirmation = ({ form }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div class="flex items-center justify-center h-screen bg-gray-100 p-10 h-60 rounded-xl">
    <div>
      <div class="flex flex-col items-center space-y-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 class="text-4xl font-bold">Thank You !</h1>
        <p className="text-center">We appreciate your interest and will get back to you soon with further information.</p>
      </div>
    </div>
  </div>
  );
};

export default Confirmation;
