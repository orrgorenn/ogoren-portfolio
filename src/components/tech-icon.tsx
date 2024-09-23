import React from "react";

export default function TechIcon({
  component,
}: {
  component: React.ElementType;
}) {
  const Component = component;

  return (
    <>
      <Component className="size-10 fill-[url(#techIconGradient)]" />
      <svg className="absolute size-0">
        <linearGradient id="techIconGradient">
          <stop offset="0%" stopColor="rgb(110 231 183)" />
          <stop offset="100%" stopColor="rgb(56 189 248)" />
        </linearGradient>
      </svg>
    </>
  );
}
