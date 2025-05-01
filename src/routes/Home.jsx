import React, { useEffect, useState } from "react";

export default function Home() {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    // Placeholder to fetch followers
  }, []);

  async function joinWhitelist() {
    // Logic to join whitelist
  }

  return (
    <div className="max-w-xl mx-auto p-6 font-sans">

      {/* Product Image */}
      <img
        src="https://pbs.twimg.com/media/GjtzVB4aIAAYzpi?format=jpg&name=large"
        alt="Near Field Circuit"
        className="w-full rounded-xl shadow-md"
      />

      {/* Title and Edition */}
      <div className="mt-6 text-left">
        <h1 className="text-3xl font-semibold text-gray-900">Near Field Circuit</h1>
        <p className="text-base text-gray-600 mt-2">Edition 01 — Beta</p>
      </div>

      {/* Join Whitelist Button */}
      <button
        onClick={joinWhitelist}
        className="mt-6 bg-black text-white font-medium px-6 py-2.5 rounded-md hover:bg-gray-800 transition"
      >
        Join Whitelist
      </button>

      {/* Followers Section */}
      <div className="mt-8">
        {followers.map((follower, idx) => (
          <p key={idx} className="text-gray-700">{follower}</p>
        ))}
      </div>

      {/* Follow on X */}
      <div className="mt-10 border-t border-gray-200 pt-4 flex items-center">
        <a
          href="https://x.com/phygicoil"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 hover:text-black transition"
        >
          Follow on X
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="ml-2">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
        </a>
      </div>

    </div>
  );
}
