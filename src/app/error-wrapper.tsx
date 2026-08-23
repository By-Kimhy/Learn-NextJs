"use client";

import "./global.css";
import { useState } from "react";
interface WrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({
  message = "An error occurred",
}: {
  message?: string;
}) => {
  const [error, setError] = useState(false);
  if (error) {
    throw new Error(message);
  }
  return (
    <div>
      <button
        title="Simulate Error"
        className="bg-red-500 hover:bg-red-700 text-white rounded p-1 leading-none font-semibold"
        onClick={() => setError(true)}
      >
        Simulate Error
      </button>
    </div>
  );
};

export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      
      <div className="text-center">
        <ErrorSimulator message="Simulated error in root layout" />
      </div>
      {children}
    </div>
  );
};
