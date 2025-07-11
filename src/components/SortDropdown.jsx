import React from "react";

export default function SortDropdown({ sortKey, setSortKey }) {
  return (
    <>
      <select
        value={sortKey}
        onChange={(e) => setSortKey(e.target.value)}
        className="border px-2 py-1 rounded shadow ml-4 bg-[#24243e] "
      >
        <option value="market_cap">Market Cap</option>
        <option value="current_price">Price</option>
        <option value="price_change_percentage_24h">24h % Change</option>
      </select>
    </>
  );
}
