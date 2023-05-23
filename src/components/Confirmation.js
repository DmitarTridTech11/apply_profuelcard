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
    <div className="w-96 bg-white h-40 p-10 rounded-xl">
      <div className="w-full h-4 bg-gray-200 rounded">
        <div className="h-full bg-blue-500 rounded" style={{ width: `${progress}%` }}></div>
        <p className="text-center pt-5">Please wait until we check your application...</p>
      </div>
    </div>
  );
};

export default Confirmation;
