
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
    <div className="min-h-screen flex flex-col bg-[rgba(245,247,251,1)]">
      <div className="w-full overflow-hidden">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/3a302e9e45884d5dbbb217f74f227a95/345c8f353dcc7bca9150179be6539412de26b15835cb07020bf88c27eb05afab"
          className="w-full h-auto object-cover"
          alt="Header decoration"
        />
      </div>

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 bg-white rounded-tl-3xl px-4 md:px-8 lg:px-12 pt-12 md:pt-16 lg:pt-20">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-[rgba(33,34,75,1)] text-4xl font-medium leading-tight text-center">
              What can I help with?
            </h1>

            <SearchBar />

            <div className="mt-16 md:mt-20">
              <h2 className="text-gray-800 text-lg font-medium leading-none">
                Popular templates
              </h2>

              <CategoryTabs
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                className="mt-6"
              />

              <div className="flex flex-wrap gap-4 mt-6">
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
  );
};

export default Index;
