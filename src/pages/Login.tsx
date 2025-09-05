import React from "react";
import logo from "../assets/mlops-logo.png"; // your logo file

const BACKEND = "http://localhost:8000"; // adjust FastAPI port if needed

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow rounded-md p-4 w-full max-w-xs text-center">
        {/* Logo */}
        <img src={logo} alt="MLOps Logo" className="mx-auto mb-3 h-8" />

        {/* Heading */}
        <h1 className="text-lg font-semibold mb-4">Sign in</h1>

        {/* GitHub button */}
        <a
          href={`${BACKEND}/auth/github/login?redirect=http://localhost:5173/success`}
          className="flex items-center justify-center gap-2 w-full py-1.5 px-3 
                     bg-black text-white rounded-md text-sm font-medium 
                     hover:bg-gray-800 transition"
        >
          {/* Small GitHub icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.8-1.5-3.8-1.5-.6-1.5-1.4-1.9-1.4-1.9-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1.8 2.2.8 2.2.5 1.2 1.9.9 2.4.7.1-.6.4-1 .7-1.3-2.6-.3-5.3-1.3-5.3-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.7 11.7 0 016.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.7.9 1.2 2 1.2 3.3 0 4.7-2.7 5.7-5.3 6 .5.4.9 1.2.9 2.5v3.6c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
          </svg>
          Continue with GitHub
        </a>
      </div>
    </div>
  );
}
