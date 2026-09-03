import React from "react";

const Filtertypes = ({ filter, selected, setSelected }) => {
  return (
    <div className="mt-6 flex flex-wrap gap-6">
      {filter.map((f) => {
        const value = f._id || f;
        const label = f.name || f;

        return (
          <div
            key={value}
            onClick={() => setSelected(value)}
            className={`px-10 py-4 rounded-2xl cursor-pointer transition-all duration-300 ${
              selected === value
                ? "bg-[#239D9A] text-white"
                : "bg-[#2E2E30]/50 hover:bg-[#3b3b3d]/60"
            }`}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
};

export default Filtertypes;