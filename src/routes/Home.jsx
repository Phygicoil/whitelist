import React, { useEffect, useState } from "react";
import { useUpProvider } from '../contexts/UpProvider';

export default function Home() {
  const { universalProfile } = useUniversalProfile();
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetchFollowers();
  }, []);

  async function fetchFollowers() {
    // Logic clearly to fetch current whitelist UPs goes here...
  }

  async function joinWhitelist() {
    // Logic clearly to add current UP to whitelist goes here...
  }

  return (
    <div className="flex flex-col items-center p-4 bg-white">
      {/* Product Image */}
      <img 
        src="https://pbs.twimg.com/media/GjtzVB4aIAAYzpi?format=jpg&name=large" 
        alt="Product" 
        className="mb-6 rounded-lg max-w-sm"
      />

      {/* Whitelist Join Button */}
      <button 
        onClick={joinWhitelist}
        className="py-2 px-4 bg-black text-white rounded-lg"
      >
        Join Whitelist
      </button>

      {/* Followers clearly listed */}
      <div className="mt-6 flex flex-wrap justify-center">
        {followers.map((follower, index) => (
          <img 
            key={index} 
            src={follower.avatar} 
            alt="UP Avatar"
            className="h-12 w-12 m-1 rounded-full"
          />
        ))}
      </div>
    </div>
  );
}