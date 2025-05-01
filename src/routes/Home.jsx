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
    <div className="font-[Optima,'Palatino',serif] bg-white text-[#333] min-h-screen">
      <div className="max-w-[800px] mx-auto">

        {/* Hero Image */}
        <div className="w-full h-[450px] bg-black flex justify-center items-center overflow-hidden">
          <img
            src="https://pbs.twimg.com/media/GjtzVB4aIAAYzpi?format=jpg&name=large"
            alt="Near Field Circuit"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-[60px] py-[40px] flex flex-col items-start">

          <h1 className="text-[36px] font-normal tracking-wide text-[#222] mb-2">
            Near Field Circuit
          </h1>
          <p className="text-[18px] font-light tracking-wide text-[#777] mb-10">
            Edition 01 — Beta
          </p>

          <div className="flex gap-5 items-center mb-10">
            <button
              onClick={joinWhitelist}
              className="bg-black text-white border-none px-6 py-3 font-[Optima,'Palatino',serif] cursor-pointer tracking-wide transition duration-300 hover:bg-[#333]"
