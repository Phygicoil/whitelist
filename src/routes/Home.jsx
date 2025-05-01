import React, { useEffect, useState } from "react";
import { useUpProvider } from "../contexts/UpProvider";

export default function Home() {
  const auth = useUpProvider();
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetchFollowers();
  }, []);

  async function fetchFollowers() {
    // Fetch followers logic here...
  }

  async function joinWhitelist() {
    // Add current user to whitelist logic here...
  }

  return (
    <div className="flex flex-col items-center bg-white text-gray-900 font-serif min-h-screen py-12">
      <div className="max-w-3xl mx-auto shadow-xl overflow-hidden rounded-lg border border-gray-200">
        {/* Product Image */}
        <div className="bg-black w-full h-[450px] flex items-center justify-center">
          <img
            src="https://pbs.twimg.com/media/GjtzVB4aIAAYzpi?format=jpg&name=large"
            alt="Near Field Circuit"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="px-10 py-10 space-y-6">
          <h1 className="text-4xl font-light tracking-wide text-gray-900">
            Near Field Circuit
          </h1>
          <p className="text-xl text-gray-500 tracking-wide">
            Edition 01 — Beta
          </p>

          {/* Buttons */}
          <div className="flex items-center space-x-4 mt-8">
            <button
              onClick={joinWhitelist}
              className="px-6 py-2 text-lg bg-black text-white font-normal tracking-wider hover:bg-gray-700 transition"
            >
              Join Whitelist
            </button>

            <a
              href="https://x.com/phygicoil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 border border-gray-300 hover:border-gray-500 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
          </div>

          {/* Whitelist Members Section */}
          <div className="pt-8 border-t border-gray-200">
            <h2 className="text-xl tracking-wide text-gray-600 font-normal">
              Whitelist Members
            </h2>
            <div className="mt-4 space-y-1 text-gray-600">
              {followers.map((follower, idx) => (
                <p key={idx}>{follower}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}