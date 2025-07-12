import React from "react";
import { formatCurrency, formatPercentage } from "../utils/formatters";

export default function HistoryTable({ data }) {
  return (
    <div className="overflow-x-auto shadow rounded-xl bg-white/10 text-white backdrop-blur-lg p-4">
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left border-b border-white/20">
            <th className="py-2 px-3">Name</th>
            <th className="py-2 px-3">Symbol</th>
            <th className="py-2 px-3">Price</th>
            <th className="py-2 px-3">Market Cap</th>
            <th className="py-2 px-3">% Change (24h)</th>
            <th className="py-2 px-3">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin, index) => (
            <tr
              key={index}
              className="border-b border-white/10 hover:bg-white/5 transition"
            >
              <td className="py-2 px-3">{coin.name}</td>
              <td className="py-2 px-3 uppercase">{coin.symbol}</td>
              <td className="py-2 px-3">{formatCurrency(coin.price)}</td>
              <td className="py-2 px-3">{formatCurrency(coin.marketCap)}</td>
              <td
                className={`py-2 px-3 ${
                  coin.priceChange24h >= 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {formatPercentage(coin.change24h)}
              </td>
              <td className="py-2 px-3 text-xs text-gray-300">
                {new Date(coin.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
