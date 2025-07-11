import React, { useEffect, useState } from "react";
import { fetchAllHistory } from "../api/coinApi";
import HistoryTable from "../components/HistoryTable";

export default function AllHistoryPage() {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchAllHistory();
        setHistoryData(res.data.data);
      } catch (error) {
        console.error("Failed to load history:", error);
      }
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 p-6 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">📊 All Coin History</h1>
        <HistoryTable data={historyData} />
      </div>
    </div>
  );
}
