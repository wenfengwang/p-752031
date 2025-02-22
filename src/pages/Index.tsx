import React, { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { SearchBar } from "@/components/search/SearchBar";
import { TemplateCard } from "@/components/template/TemplateCard";
import { CategoryTabs } from "@/components/ui/CategoryTabs";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("Sales");

  const categories = ["Marketing", "Sales", "News", "Finance"];

  const templates = [
    {
      title: "Elon musk tweets",
      description: "Open https://x.com/elonmusk to scrap latest 10 posts",
      icons: [
        "https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/0f616745-0372-41a6-bb21-a95841a65968",
        "https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/ca8c724c3ab8847ef33f7c7186373fcf78d9dce739057f5976ba14f564ea7ce1",
      ],
    },
    // Repeat template for demonstration
    ...Array(5).fill({
      title: "Elon musk tweets",
      description: "Open https://x.com/elonmusk to scrap latest 10 posts",
      icons: [
        "https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/9112419fb893a7f3bd417628402f4d53d0fe0c2a47ad6d5ac9cc3c6d6cbf12ce",
      ],
    }),
  ];

  return (
    <div className="flex flex-col items-stretch pb-[1011px] max-md:pb-[100px]">
      <div className="bg-[rgba(245,247,251,1)] min-h-[1080px] w-full overflow-hidden max-md:max-w-full">
        <div className="min-h-[79px] w-full max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/345c8f353dcc7bca9150179be6539412de26b15835cb07020bf88c27eb05afab"
            className="aspect-[45.45] object-contain w-[1920px] max-md:max-w-full"
            alt="Header decoration"
          />
        </div>

        <div className="bg-gray-50 flex w-full items-stretch flex-wrap max-md:max-w-full">
          <Sidebar />

          <main className="bg-white min-w-60 flex-1 shrink basis-[0%] pt-[200px] rounded-md max-md:max-w-full max-md:pt-[100px]">
            <div className="flex w-full flex-col items-center justify-center max-md:max-w-full">
              <h1 className="text-[rgba(33,34,75,1)] text-4xl font-medium leading-none text-center max-md:max-w-full">
                What can I help with?
              </h1>

              <SearchBar />

              <div className="flex w-full flex-col items-stretch mt-[100px] px-10 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <h2 className="text-gray-800 text-lg font-medium leading-none max-md:max-w-full">
                  Popular templates
                </h2>

                <CategoryTabs
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                  className="mt-6"
                />

                <div className="flex w-full gap-4 flex-wrap mt-6 max-md:max-w-full">
                  {templates.map((template, index) => (
                    <TemplateCard
                      key={index}
                      title={template.title}
                      description={template.description}
                      icons={template.icons}
                      selected={index === 0}
                    />
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="z-10 flex mt-[-1033px] w-full max-w-[1772px] flex-col text-sm text-[rgba(32,33,36,1)] font-normal whitespace-nowrap tracking-[0.25px] py-0.5 max-md:max-w-full max-md:mt-[-200px] max-md:mr-2.5">
        <div className="bg-[rgba(241,243,244,1)] z-10 flex w-full max-w-[1705px] items-stretch gap-5 flex-wrap justify-between px-[11px] py-1.5 rounded-[14px] max-md:max-w-full">
          <div className="flex items-stretch gap-2.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/5bb10f47cb83e82f2f275132210a8c467571657dbf3f0c313c75c655997899c0"
              className="aspect-[1] object-contain w-3 shrink-0 my-auto"
              alt="Domain icon"
            />
            <span>NPi.ai</span>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/a2073d432084b28b90c9c14fc721a2f2a44c544ea81883c6627d1c71e4a9f552"
            className="aspect-[1] object-contain w-4 shrink-0"
            alt="Action icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
