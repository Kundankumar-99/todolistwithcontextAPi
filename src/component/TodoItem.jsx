import React from "react";

export default function TodoItem() {
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black `}
    >
      <input type="checkbox" className="cursor-pointer" />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg 
    border-black/10 px-2 `}
      />

      {/* Edit, Save Button */}
      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50">
        {/* {isTodoEditable ? "📁" : "✏️"} */}
        {"✏️"}
      </button>
      {/* Delete Todo Button */}
      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0">
        ❌
      </button>
    </div>
  );
}
