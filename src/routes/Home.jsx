import React, { useEffect, useState } from "react";
import { useUpProvider } from '../contexts/UpProvider';

export default function Home() {
  const auth = useUpProvider();
  const [followers, setFollowers] = useState([]);
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetchFollowers();
  }, []);

  async function fetchFollowers() {
    // Fetch whitelist UPs logic
  }

  async function joinWhitelist() {
    // Logic to join whitelist
  }

  async function handleEmailSubmit() {
    window.location.href = `mailto:info@jimhannontan.com?subject=Whitelist Signup&body=Email: ${email}`;
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-black min-h-screen text-white">

      <h1 className="text-4xl font-semibold mb-6">Near Field Circuit</h1>

      <img
        src="https://pbs.twimg.com/media/GjtzVB4aIAAYzpi?format=jpg&name=large"
        alt="Product"
        className="max-w-xl w-full h-auto rounded-md mb-6 shadow-lg"
      />

      <button
        onClick={joinWhitelist}
        className="mt-4 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-xl rounded transition"
      >
        Join Whitelist
      </button>

      <div className="mt-8 w-full max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">Whitelist Members:</h2>
        <div className="bg-gray-800 rounded p-4 overflow-y-auto max-h-64">
          {followers.map((follower, idx) => (
            <p key={idx} className="text-lg border-b border-gray-700 py-1">{follower}</p>
          ))}
        </div>
      </div>

      <div className="mt-8 w-full max-w-xl flex flex-col md:flex-row md:justify-between gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-3 rounded-md flex-grow text-black text-lg"
        />
        <button
          onClick={handleEmailSubmit}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-xl rounded transition"
        >
          Submit
        </button>
      </div>

    </div>
  );
}
