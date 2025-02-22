
import React from "react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={cn("min-w-60 w-[260px]", className)}>
      <div className="flex min-h-[60px] w-full flex-col items-center text-lg text-gray-800 font-medium whitespace-nowrap leading-none justify-center">
        <button className="bg-gray-100 w-full relative flex items-start gap-2 justify-center my-auto px-4 py-2 mx-2 rounded-md">
          <div className="flex items-center gap-4 justify-center flex-1 shrink basis-[0%] my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/936481c6ea1dd6ed0175d5ac516b8d0cfde08f5abfe3f7de88433e1222f1a15f"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto rounded-[50%]"
              alt="Profile"
            />
            <span className="self-stretch my-auto text-sm">Jenny Wilson</span>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/2dc81db42d835a4c6d039f6cb80e7c3c0f16f1fe8a4bc750d8c8c610d450044d"
            className="aspect-[1] object-contain w-4 rounded absolute z-0 shrink-0 h-4 right-4 top-1/2 -translate-y-1/2"
            alt="Expand"
          />
        </button>
      </div>

      <nav className="min-h-[880px] w-full overflow-hidden pb-4">
        <div className="w-full text-sm font-medium whitespace-nowrap leading-none pt-6">
          <a
            href="#"
            className="flex min-h-9 w-full items-center gap-2 text-gray-800 px-2"
          >
            <div className="bg-gray-50 self-stretch flex min-w-60 min-h-[34px] w-full items-center gap-2.5 flex-1 shrink basis-[0%] my-auto pl-2 rounded-md">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/190f1ae54e16586fe3d40619dbfc51c3c86a31a267f7171990c7025d4fa87b4e"
                className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                alt="Welcome icon"
              />
              <span className="self-stretch my-auto">Welcome</span>
            </div>
          </a>

          <a
            href="#"
            className="flex min-h-9 w-full items-center gap-2 text-[rgba(110,125,255,1)] mt-2.5 px-2"
          >
            <div className="bg-gray-100 self-stretch flex min-w-60 min-h-[34px] w-full items-center gap-2.5 flex-1 shrink basis-[0%] my-auto pl-2 rounded-md">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/1a8b3e1c280b9905ebdf9e7486e002372c762f0fecc9e7bfa65659a6bc4765b5"
                className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                alt="Home icon"
              />
              <span className="self-stretch my-auto">Home</span>
            </div>
          </a>
        </div>

        <div className="w-full mt-3">
          <div className="flex w-full flex-col items-stretch justify-center">
            <h2 className="self-stretch min-h-8 w-full gap-2.5 text-xs text-gray-800 font-normal whitespace-nowrap leading-none pl-2.5">
              Workbooks
            </h2>

            <div className="w-full">
              <div className="rounded w-full px-2.5">
                <div className="rounded bg-gray-100 relative w-full">
                  <button className="z-0 flex min-h-8 w-full items-center px-2">
                    <div className="self-stretch flex items-center gap-2 text-sm text-gray-800 font-normal leading-none w-[180px] my-auto">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/c062c66873d9fe8b5ea752b8b294d7512423d323188bdaceb034d4debdef19fa"
                        className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                        alt="YC Companies icon"
                      />
                      <span>YC Companies</span>
                    </div>
                    <div className="self-stretch flex items-center gap-1 my-auto">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/87ec9a3456aaab76c464051412877b669cb554cb51dc62dea7e686f723027540"
                        className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto rounded-lg"
                        alt="Action icon"
                      />
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/d6665cdde7a25d51caaaeaabea04795f456bd79375e9ae2cf7a6d24c909801cc"
                        className="aspect-[1] object-contain w-4 rounded self-stretch shrink-0 my-auto"
                        alt="Expand icon"
                      />
                    </div>
                  </button>

                  <div className="pl-8">
                    <button className="z-0 flex min-h-9 w-full items-stretch gap-6 text-sm text-gray-500 font-normal whitespace-nowrap leading-loose px-4">
                      <div className="border border w-0 shrink-0 h-9 border-solid" />
                      <span className="my-auto">W25</span>
                    </button>
                    <button className="z-0 flex min-h-9 w-full items-stretch gap-6 text-[13px] text-gray-500 font-normal whitespace-nowrap leading-loose px-4">
                      <div className="border border w-0 shrink-0 h-9 border-solid" />
                      <span className="my-auto">S24</span>
                    </button>
                    <button className="z-0 flex min-h-9 w-full items-stretch gap-2 text-[13px] text-gray-800 font-medium whitespace-nowrap leading-none px-4">
                      <div className="border border w-0 shrink-0 h-9 border-solid" />
                      <div className="bg-gray-100 flex w-full items-center justify-between h-full flex-1 shrink basis-[0%] px-4 rounded-md">
                        <span className="self-stretch gap-2.5 my-auto">
                          W24
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="flex min-h-8 w-full items-center gap-2.5 text-xs text-gray-500 font-normal leading-none justify-center mt-3 px-[60px]">
          <div className="self-stretch rounded w-full gap-2.5 flex-1 shrink basis-[0%] my-auto py-2.5">
            + New Workbook
          </div>
        </button>
      </nav>
    </div>
  );
};
