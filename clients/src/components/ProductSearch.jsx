import React from "react";

const ProductSearch = ({ value, onChange }) => {
  return (
    <div className="mb-12 flex justify-center">
      <div className="relative w-full max-w-xl">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search products..."
          className="w-full px-6 py-4 pr-14 rounded-full
                     border border-pink-200
                     bg-white text-gray-800
                     focus:outline-none focus:ring-2 focus:ring-pink-400
                     shadow-sm"
        />

        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-pink-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default ProductSearch;
