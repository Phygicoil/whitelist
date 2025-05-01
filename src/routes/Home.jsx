import React, { useEffect, useState } from "react";
import { useUpProvider } from '../contexts/UpProvider';

export default function Home() {
  const auth = useUpProvider();
  const { universalProfile } = auth;
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
      />
    </div>
  );
}