import React from "react";
import { cn } from "@/lib/utils";

interface TemplateCardProps {
  className?: string;
  title: string;
  description: string;
  selected?: boolean;
  icons?: string[];
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  className,
  title,
  description,
  selected = false,
  icons = [],
}) => {
  return (
    <div
      className={cn(
        "bg-white border min-w-60 min-h-[120px] w-[290px] p-4 rounded-xl border-solid",
        selected && "border-[rgba(110,125,255,1)]",
        className,
      )}
    >
      <div className="flex w-full items-center gap-2.5 justify-between">
        <div className="flex items-center gap-2.5">
          {icons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              className="aspect-[1] object-contain w-5 self-stretch my-auto"
              alt={`Template icon ${index + 1}`}
            />
          ))}
        </div>
        {selected && (
          <button className="bg-black text-[13px] text-white font-normal whitespace-nowrap leading-loose px-2 rounded-md">
            Use
          </button>
        )}
      </div>

      <div className="mt-3">
        <h3 className="text-[13px] text-gray-800 font-medium leading-none">
          {title}
        </h3>
        <p className="text-xs text-gray-500 font-normal mt-2">{description}</p>
      </div>
    </div>
  );
};
