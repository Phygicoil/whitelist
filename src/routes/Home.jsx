import React, { useEffect, useState } from "react";
import { ethers, BrowserProvider, JsonRpcProvider } from "ethers";

const CONTRACT_ADDRESS = "0xb8Cb9C6bE4341C8061035C0839B1f5B538b11892";
const ABI = [
  {
    "inputs": [
      { "internalType": "address", "name": "_addr", "type": "address" },
      { "internalType": "bytes32", "name": "_emojiId", "type": "bytes32" },
      { "internalType": "bytes", "name": "_message", "type": "bytes" }
    ],
    "name": "react",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "bytes32", "name": "emojiId", "type": "bytes32" },
      { "indexed": true, "internalType": "address", "name": "from", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "to", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "dt", "type": "uint256" }
    ],
    "name": "Reacted",
    "type": "event"
  }
];

const emojiId = ethers.encodeBytes32String("\u200B");

export default function Whitelist() {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetchWhitelistMembers();
  }, []);

  async function joinWhitelist() {
    if (!window.lukso) {
      alert("Please install the Universal Profile extension.");
      return;
    }

    const provider = new BrowserProvider(window.lukso);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const userAddress = await signer.getAddress();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

    try {
      const tx = await contract.react(userAddress, emojiId, "0x", { value: 0 });
      await tx.wait();
      alert("You've joined the whitelist!");
      fetchWhitelistMembers();
    } catch (error) {
      console.error("Whitelist join error:", error);
      alert("Failed to join whitelist.");
    }
  }

  async function fetchWhitelistMembers() {
    const provider = new JsonRpcProvider("https://rpc.lukso.gateway.fm");
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

    const filter = contract.filters.Reacted(emojiId, null, null);
    const events = await contract.queryFilter(filter, 0, "latest");

    const whitelistAddresses = events.map(event => event.args.from);
    const uniqueAddresses = [...new Set(whitelistAddresses)];

    setFollowers(uniqueAddresses);
  }

  return (
    <div className="flex flex-col items-center p-8 bg-[#080808] text-white min-h-screen">
      <h1 className="text-4xl font-semibold my-8">Near Field Circuit</h1>
      <p className="text-xl mb-4">Edition 1 - Beta</p>

      <img
        src="https://pbs.twimg.com/media/GjtzVB4aIAAYzpi?format=jpg&name=large"
        alt="Product"
        className="max-w-full h-auto rounded-lg shadow-lg"
      />

      <button
        onClick={joinWhitelist}
        className="mt-8 px-8 py-3 bg-white text-black text-lg rounded-full hover:bg-gray-200 transition duration-300"
      >
        Join Whitelist
      </button>

      <div className="mt-8 w-full max-w-lg text-center">
        <h3 className="font-semibold text-2xl mb-4">Whitelist Members:</h3>
        {followers.length === 0 && <p>No members yet.</p>}
        {followers.map((address, idx) => (
          <div key={idx} className="mb-2">
            {address}
          </div>
        ))}
      </div>
    </div>
  );
}