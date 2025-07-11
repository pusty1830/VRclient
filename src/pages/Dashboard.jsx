import React, { useEffect, useState } from "react";
import { fetchCoins } from "../api/coinApi.js";
import SearchBar from "../components/SearchBar.jsx";
import SortDropdown from "../components/SortDropdown.jsx";
import CoinTable from "../components/CoinTable.jsx";

export default function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("market_cap");

  const getData = async () => {
    try {
      const res = await fetchCoins();
      setCoins(res.data.data || res.data);
    } catch (error) {
      console.error("Error fetching coins:", error);
    }
  };

  useEffect(() => {
    getData();
    const interval = setInterval(getData, 30 * 60 * 1000); // 30 minutes
    return () => clearInterval(interval);
  }, []);

  const filteredCoins = coins
    .filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => b[sortKey] - a[sortKey]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 animate-pulse">
            🚀 Crypto Tracker Dashboard
          </h1>
          <p className="text-gray-300 mt-2">
            Top 10 Coins - Auto-refreshes every 30 mins
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <SortDropdown sortKey={sortKey} setSortKey={setSortKey} />
        </div>

        {filteredCoins.length > 0 ? (
          <CoinTable coins={filteredCoins} />
        ) : (
          <div className="text-center text-gray-400 mt-12">
            <p className="text-lg">
              No coins found. Try adjusting your search or sorting.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
