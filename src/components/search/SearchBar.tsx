
import React from "react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border border-gray-200 w-full max-w-3xl mx-auto mt-6 pt-4 pb-2 px-4 rounded-3xl",
        className,
      )}
    >
      <input
        type="text"
        placeholder="Type something"
        className="w-full text-[15px] text-gray-400 font-normal pl-2 bg-transparent border-none outline-none"
      />

      <div className="flex items-center justify-between gap-4 mt-12 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="bg-white flex items-center justify-center w-9 h-9 rounded-3xl">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/3300e1a9d81eae93d2dbe8431a3e3a99b7c25b4e7625d1724e7d0c03c6e6cc33"
              className="w-6 h-6"
              alt="Search icon"
            />
          </div>

          <div className="relative">
            <button className="bg-white border border-gray-200 flex items-center gap-2 px-3 py-2 rounded-lg">
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-0.5">
                  <div className="w-5 h-5 overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/b9756b98d02d210fd0033d956d6e428befe1deb4d6389df79e4123d1b288d64d"
                      className="w-full h-full object-contain"
                      alt="Source icon"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/ca8c724c3ab8847ef33f7c7186373fcf78d9dce739057f5976ba14f564ea7ce1"
                      className="w-5 h-5"
                      alt="Source 1"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/61ceee41edecd5040c15c5abfa2742b90b96dc6f22b11bc71dad9d878c32e49c"
                      className="w-5 h-5"
                      alt="Source 2"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/a08141efc114eaa0d260e5236700c7b5269ea71bfb3a8db2c2ed10613f8b81bc"
                      className="w-5 h-5"
                      alt="Source 3"
                    />
                  </div>
                </div>
                <span className="text-xs text-gray-300">... 5 sources</span>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/d6665cdde7a25d51caaaeaabea04795f456bd79375e9ae2cf7a6d24c909801cc"
                className="w-4 h-4"
                alt="Expand"
              />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="border border-gray-100 flex items-center justify-between px-3 py-2 rounded-lg min-w-[120px]">
            <span className="text-[13px] text-gray-600">Banking</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/d6665cdde7a25d51caaaeaabea04795f456bd79375e9ae2cf7a6d24c909801cc"
              className="w-4 h-4"
              alt="Expand"
            />
          </button>

          <button className="bg-gray-200 text-sm text-white font-medium px-4 py-2 rounded-3xl min-w-[80px]">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
