import React from "react";
import { cn } from "@/lib/utils";

interface CategoryTabsProps {
  className?: string;
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  className,
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div
      className={cn(
        "flex gap-4 text-[13px] font-medium whitespace-nowrap leading-none",
        className,
      )}
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "min-h-9 w-20 px-2",
            activeCategory === category
              ? "bg-gray-100 text-gray-800 rounded-xl"
              : "bg-white text-gray-400",
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
