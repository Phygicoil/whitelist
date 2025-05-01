import React, { useEffect, useState } from 'react';

export default function Home() {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetchFollowers();
  }, []);

  async function fetchFollowers() {
    // Logic to fetch whitelist followers...
  }

  async function joinWhitelist() {
    const { universalProfile, provider } = auth; 
  
    if (!universalProfile || !provider) {
      console.error("Universal Profile or provider not available");
      return;
    }
  
    try {
      const signer = provider.getSigner();
      const txData = {
        to: "<Whitelist Smart Contract Address>",
        data: "<Encoded Function Call Data>",
      };
  
      const tx = await signer.sendTransaction(txData);
      await tx.wait();  // Wait for confirmation
      console.log("Successfully joined whitelist!");
      
    } catch (error) {
      console.error("Transaction failed", error);
    }
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      {/* Product Image */}
      <img
        src="https://pbs.twimg.com/media/GjtzVB4aIAAYzpi?format=jpg&name=large"
        alt="Near Field Circuit"
        style={{ width: '100%', borderRadius: '8px' }}
      />

      {/* Title */}
      <h1 style={{ fontSize: '32px', margin: '20px 0 10px' }}>Near Field Circuit</h1>

      {/* Subtitle */}
      <p style={{ fontSize: '18px', margin: '0 0 30px', color: '#555' }}>Edition 1 — Beta</p>

      {/* Join Whitelist Button */}
      <button
        onClick={joinWhitelist}
        style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Join Whitelist
      </button>

      {/* Whitelist Members Placeholder */}
      <div style={{ marginTop: '40px' }}>
        {followers.map((follower, index) => (
          <p key={index}>{follower}</p>
        ))}
      </div>
    </div>
  );
}
