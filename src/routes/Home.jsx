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
            >
              Join Whitelist
            </button>

            <a
              href="https://x.com/phygicoil"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[42px] h-[42px] flex justify-center items-center bg-white border border-[#ddd] cursor-pointer transition duration-300 hover:border-[#999]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
          </div>

          <div className="w-full border-t border-[#eee] pt-[30px]">
            <h2 className="text-[20px] font-normal tracking-wide text-[#555] mb-5">
              Whitelist Members
            </h2>
            {followers.map((follower, idx) => (
              <p key={idx} className="mb-2">
                {follower}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
