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
    <div className="flex flex-col items-center p-8 bg-white text-gray-900 min-h-screen">

      {/* Product Image */}
      <div className="max-w-lg w-full mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <img
          src="https://pbs.twimg.com/media/GjtzVB4aIAAYzpi?format=jpg&name=large"
          alt="Product"
          className="w-full object-cover"
        />
      </div>

      {/* Title with generous padding */}
      <h1 className="text-4xl font-semibold my-10 text-gray-900">
        Near Field Circuit
      </h1>

      {/* Join Whitelist Button */}
      <button
        onClick={joinWhitelist}
        className="mt-4 px-10 py-3 bg-gray-900 text-white text-lg rounded-full hover:bg-gray-700 transition duration-300"
      >
        Join Whitelist
      </button>

      {/* Follow on X Button */}
      <a
        href="https://x.com/phygicoil"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-10 py-3 flex items-center justify-center border border-gray-300 text-gray-900 text-lg rounded-full hover:bg-gray-100 transition duration-300"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
          <path d="M18.244 2.25h3.135l-6.854 7.86 8.083 11.64h-6.324l-4.956-7.034-6.134 7.034H2.06l7.338-8.415L1.75 2.25h6.452l4.62 6.575L18.244 2.25zm-1.1 17.406h1.733L6.937 4.238H5.042l12.103 15.418z" />
        </svg>
        Follow on X
      </a>

      {/* Whitelist Members Display */}
      <div className="mt-10 w-full max-w-lg text-center">
        <h3 className="font-semibold text-2xl mb-4">Whitelist Members:</h3>
        {followers.map((follower, idx) => (
          <p key={idx} className="mb-2">{follower}</p>
        ))}
      </div>

    </div>
  );
}