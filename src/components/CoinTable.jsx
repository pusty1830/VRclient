import React from "react";
import { formatCurrency, formatPercentage } from "../utils/formatters";

export default function CoinTable({ coins }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {coins.map((coin) => {
        const isPositive = coin.price_change_percentage_24h >= 0;
        return (
          <div
            key={coin.id}
            className="relative overflow-hidden p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Fancy gradient border effect */}
            <div className="absolute inset-0 rounded-xl border border-transparent bg-gradient-to-br from-purple-500/30 to-pink-500/20 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">{coin.name}</h2>
                <span className="uppercase text-sm text-gray-300">
                  {coin.symbol}
                </span>
              </div>

              <p className="text-2xl font-semibold text-yellow-300 mb-1">
                {formatCurrency(coin.price)}
              </p>
              <p className="text-sm text-gray-300 mb-1">
                Market Cap: {formatCurrency(coin.marketCap)}
              </p>

              <p
                className={`text-base font-medium mt-2 flex items-center ${
                  isPositive ? "text-green-400" : "text-red-400"
                }`}
              >
                {isPositive ? "▲" : "▼"}{" "}
                {formatPercentage(coin.price_change_percentage_24h)}
              </p>

              <p className="text-xs text-gray-400 mt-3">
                Last Updated: {new Date(coin.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
