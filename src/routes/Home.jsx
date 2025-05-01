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
    <div className="flex flex-col items-center p-8 bg-white text-black font-sans">
      {/* Product Image */}
      <img
        src="https://pbs.twimg.com/media/GjtzVB4aIAAYzpi?format=jpg&name=large"
        alt="Near Field Circuit"
        className="w-full h-auto rounded-lg shadow-md"
      />

      {/* Main Heading */}
      <h1 className="text-4xl font-semibold mt-10 mb-2">
        Near Field Circuit
      </h1>

      {/* Edition Info */}
      <p className="text-xl text-gray-600 mb-8">
        Edition 01 — Beta
      </p>

      {/* Whitelist Button */}
      <button
        onClick={joinWhitelist}
        className="px-8 py-3 bg-black text-white text-lg rounded-full hover:bg-gray-700 transition duration-300 mb-8"
      >
        Join Waitlist
      </button>

      {/* Whitelist Members Heading */}
      <h2 className="text-xl text-gray-600 font-medium mb-8">
        Whitelist Members
      </h2>

      {/* List of Followers */}
      <div className="w-full max-w-md text-center">
        {followers.map((follower, idx) => (
          <p key={idx} className="mb-2">{follower}</p>
        ))}
      </div>

      {/* Follow on X */}
      <div className="mt-16 flex flex-col items-center">
        <a
          href="https://x.com/phygicoil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-gray-600 font-medium hover:text-gray-800 transition"
        >
          Follow on X
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="mt-2 text-black">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>
      </div>
    </div>
  );
}
