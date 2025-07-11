import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchHistoryByCoinId } from "../api/coinApi";
import HistoryTable from "../components/HistoryTable";

export default function CoinHistoryPage() {
  const { coinId } = useParams();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const res = await fetchHistoryByCoinId(coinId);
        setHistory(res.data.data);
      } catch (err) {
        console.error("Failed to load history for coin:", err);
      }
    };

    loadHistory();
  }, [coinId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-gray-900 p-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">📈 History for: {coinId}</h1>
        <HistoryTable data={history} />
      </div>
    </div>
  );
}
