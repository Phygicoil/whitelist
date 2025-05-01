import React, { useEffect, useState } from "react";
import { useUpProvider } from '../contexts/UpProvider';

export default function Home() {
  const auth = useUpProvider();
  const { universalProfile } = auth;
  const [followers, setFollowers] = useState([]);
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetchFollowers();
  }, []);

  async function fetchFollowers() {
    // Logic clearly to fetch current whitelist UPs
  }

  async function joinWhitelist() {
    // Logic clearly to add current UP to whitelist
  }

  async function handleEmailSubmit(e) {
    e.preventDefault();

    await fetch("https://formspree.io/f/info@jimhannontan.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    setEmail('');
  }

  return (
    <div className="flex flex-col items-center p-4 bg-black text-white">
      <img
        src="https://pbs.twimg.com/media/GjtzVB4aIAAYzpi?format=jpg&name=large"
        alt="Product"
        className="max-w-full h-auto"
      />

      <button 
        onClick={joinWhitelist} 
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Join Whitelist
      </button>

      <div className="mt-4 w-full">
        <h3 className="font-semibold mb-2">Whitelist Members:</h3>
        {followers.map((follower, idx) => (
          <p key={idx}>{follower}</p>
        ))}
      </div>

      <form onSubmit={handleEmailSubmit} className="mt-6 flex flex-col items-center w-full">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-400 rounded px-4 py-2 w-full max-w-sm bg-gray-800 text-white placeholder-gray-300"
        />
        <button 
          type="submit"
          className="mt-3 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Submit Email
        </button>
      </form>
    </div>
  );
}
