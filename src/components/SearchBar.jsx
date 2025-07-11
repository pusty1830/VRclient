import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="🔍 Search coins..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border px-2 py-1 rounded shadow"
    />
  );
}
