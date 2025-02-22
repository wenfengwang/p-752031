import React from "react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border-gray-500 border w-[1064px] max-w-full mt-6 pt-4 pb-2 px-2 rounded-3xl border-solid",
        className,
      )}
    >
      <input
        type="text"
        placeholder="Type something"
        className="w-full text-[15px] text-gray-400 font-normal pl-2 bg-transparent border-none outline-none"
      />

      <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
        <div className="self-stretch flex min-w-60 items-center gap-2 my-auto">
          <div className="bg-white self-stretch flex min-h-9 items-center gap-2.5 justify-center w-9 h-9 my-auto rounded-3xl">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/3300e1a9d81eae93d2dbe8431a3e3a99b7c25b4e7625d1724e7d0c03c6e6cc33"
              className="aspect-[1] object-contain w-6 self-stretch my-auto"
              alt="Search icon"
            />
          </div>

          <div className="self-stretch relative w-[201px] my-auto">
            <button className="bg-white border border z-0 flex min-h-9 w-full items-center gap-2 px-2 rounded-lg border-solid">
              <div className="self-stretch flex items-center gap-0.5 flex-1 shrink basis-[0%] my-auto">
                <div className="self-stretch flex items-center gap-0.5 my-auto">
                  <div className="self-stretch flex min-h-5 items-center gap-2.5 overflow-hidden w-5 my-auto">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/b9756b98d02d210fd0033d956d6e428befe1deb4d6389df79e4123d1b288d64d"
                      className="aspect-[1] object-contain w-5 self-stretch my-auto"
                      alt="Source icon"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/ca8c724c3ab8847ef33f7c7186373fcf78d9dce739057f5976ba14f564ea7ce1"
                      className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                      alt="Source 1"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/61ceee41edecd5040c15c5abfa2742b90b96dc6f22b11bc71dad9d878c32e49c"
                      className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                      alt="Source 2"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/a08141efc114eaa0d260e5236700c7b5269ea71bfb3a8db2c2ed10613f8b81bc"
                      className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                      alt="Source 3"
                    />
                  </div>
                </div>
                <span className="text-xs text-gray-300 font-normal my-auto">
                  ... 5 sources
                </span>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/d6665cdde7a25d51caaaeaabea04795f456bd79375e9ae2cf7a6d24c909801cc"
                className="aspect-[1] object-contain w-4 rounded self-stretch shrink-0 my-auto"
                alt="Expand"
              />
            </button>
          </div>
        </div>

        <div className="self-stretch flex items-center gap-2 my-auto">
          <div className="self-stretch relative text-[13px] font-normal leading-loose w-[151px] my-auto">
            <button className="z-0 flex min-h-9 w-full items-stretch gap-2 text-gray-600 whitespace-nowrap px-3 py-0.5 rounded-md">
              <div className="border-gray-100 border flex w-full items-center gap-[3px] justify-between h-full flex-1 shrink basis-[0%] pr-2 rounded-lg border-solid">
                <span className="self-stretch gap-2 w-[100px] my-auto">
                  Banking
                </span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/d6665cdde7a25d51caaaeaabea04795f456bd79375e9ae2cf7a6d24c909801cc"
                  className="aspect-[1] object-contain w-4 rounded self-stretch shrink-0 my-auto"
                  alt="Expand"
                />
              </div>
            </button>
          </div>

          <button className="self-stretch bg-gray-200 min-h-8 gap-2 overflow-hidden text-sm text-white font-medium whitespace-nowrap tracking-[-0.04px] leading-none w-20 my-auto px-4 rounded-3xl">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
