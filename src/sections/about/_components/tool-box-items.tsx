import TechIcon from "@/components/tech-icon";
import React from "react";
import { twMerge } from "tailwind-merge";

export type ToolboxItem = {
  title: string;
  iconType: React.ElementType;
};

export default function ToolboxItems({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: ToolboxItem[];
  className?: string;
  itemsWrapperClassName?: string;
}) {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none gap-6 py-0.5 pr-6",
          itemsWrapperClassName
        )}
      >
        {items.map((item: ToolboxItem) => (
          <div
            key={item.title}
            className="inline-flex items-center gap-4 rounded-lg px-3 py-2 outline outline-2 outline-white/10"
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
