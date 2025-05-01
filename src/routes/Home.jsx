import React, { useEffect, useState } from "react";
import { useUpProvider } from "../contexts/UpProvider";  // <- Add this exact line

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
    <div className="flex flex-col items-center p-8 bg-[#080808] text-white min-h-screen">
      
      {/* Title with generous padding */}
      <h1 className="text-4xl font-semibold my-8">
        Near Field Circuit
      </h1>
      
      {/* Product Image */}
      <img
        src="https://pbs.twimg.com/media/GjtzVB4aIAAYzpi?format=jpg&name=large"
        alt="Product"
        className="max-w-full h-auto rounded-lg shadow-lg"
      />

      {/* Join Whitelist Button */}
      <button
        onClick={joinWhitelist}
        className="mt-8 px-8 py-3 bg-white text-black text-lg rounded-full hover:bg-gray-200 transition duration-300"
      >
        Join Whitelist
      </button>

      {/* Follow on X Button */}
      <a
        href="https://x.com/phygicoil"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-8 py-3 bg-[#1DA1F2] text-white text-lg rounded-full hover:bg-[#0d8bd9] transition duration-300"
      >
        Follow on X
      </a>

      {/* Whitelist Members Display */}
      <div className="mt-8 w-full max-w-lg text-center">
        <h3 className="font-semibold text-2xl mb-4">Whitelist Members:</h3>
        {followers.map((follower, idx) => (
          <p key={idx} className="mb-2">{follower}</p>
        ))}
      </div>
      
    </div>
  );
}