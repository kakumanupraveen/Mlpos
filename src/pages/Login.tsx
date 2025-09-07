import React, { useState } from "react";
import logo from "../assets/mlops-logo.png";

/**
 * Demo-only: goes straight to /success.
 * When backend is ready, replace handleGithubLogin with the FastAPI OAuth URL.
 */
export default function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  // Subtle repeating “MLOps” background
  const bgPattern =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Ctext x='0' y='44' font-size='44' fill='%23333' fill-opacity='0.08' font-family='Arial, Helvetica, sans-serif'%3EMLOps%3C/text%3E%3C/svg%3E\")";

  const handleGithubLogin = () => {
    // DEMO: no backend yet
    window.location.href = "/success";
    // Later:
    // const redirect = encodeURIComponent("http://localhost:5173/success");
    // window.location.href = http://localhost:8000/auth/github/login?redirect=${redirect};
  };

  return (
    <main
      className="min-h-screen w-full flex items-center justify-center"
      style={{ background: bgPattern }}
    >
      <div
        className="
          bg-white rounded-lg shadow-lg
          flex flex-col items-center
          px-5 pt-5 pb-4
          relative
        "
        style={{ width: 320, height: 322 }}
      >
        {/* Logo (top) */}
        <img
          src={logo}
          alt="MLOps Logo"
          className="mb-3"
          style={{ width: 120, height: 120 }}
        />

        {/* Form block */}
        <div className="w-full">
          {/* Email */}
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Value"
            className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 mb-3"
          />

          {/* Password */}
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Password
          </label>
          <input
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            placeholder="Value"
            type="password"
            className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />

          {/* GitHub sign-in button: EXACT 178x32 */}
          <div className="w-full flex justify-center">
            <button
              onClick={handleGithubLogin}
              className="
                bg-[#222] hover:bg-[#1a1a1a]
                rounded-md
                inline-flex items-center justify-center gap-2
                text-sm font-medium
              "
              style={{ width: 178, height: 32, color: "#fff" }}
              aria-label="Sign in with GitHub"
            >
              {/* GitHub Icon forced white */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.8-1.5-3.8-1.5-.6-1.5-1.4-1.9-1.4-1.9-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1.8 2.2.8 2.2.5 1.2 1.9.9 2.4.7.1-.6.4-1 .7-1.3-2.6-.3-5.3-1.3-5.3-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.7 11.7 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.7.9 1.2 2 1.2 3.3 0 4.7-2.7 5.7-5.3 6 .5.4.9 1.2.9 2.5v3.6c0 .3.2.7.8.6C20.7 21.4 24 17.1 24 12 24 5.65 18.35.5 12 .5z"
                  fill="white"
                />
              </svg>
              <span style={{ color: "#fff" }}>Sign in with GitHub</span>
            </button>
          </div>

          {/* Forgot password */}
          <a
            href="#"
            className="inline-block mt-4 text-sm underline text-gray-800"
          >
            Forgot password?
          </a>
        </div>
      </div>
    </main>
  );
}