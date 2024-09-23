import React from "react";

import SectionHeader from "@/components/section-header";
import Card from "@/components/card";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import PythonIcon from "@/assets/icons/python.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/card-header";
import ToolboxItems, {
  ToolboxItem,
} from "@/sections/about/_components/tool-box-items";

type Hobby = {
  title: string;
  emoji: string;
  left: string;
  top: string;
};

export default function Index() {
  const toolboxItems: ToolboxItem[] = [
    {
      title: "JavaScript",
      iconType: JavaScriptIcon,
    },
    {
      title: "Python",
      iconType: PythonIcon,
    },
    {
      title: "HTML5",
      iconType: HTMLIcon,
    },
    {
      title: "CSS3",
      iconType: CSSIcon,
    },
    {
      title: "React",
      iconType: ReactIcon,
    },
    {
      title: "Github",
      iconType: GithubIcon,
    },
  ];

  const hobbies: Hobby[] = [
    {
      title: "Smart Home",
      emoji: "🏠",
      left: "5%",
      top: "5%",
    },
    {
      title: "Music",
      emoji: "🎧",
      left: "50%",
      top: "15%",
    },
    {
      title: "Reading",
      emoji: "📚",
      left: "10%",
      top: "35%",
    },
    {
      title: "Gaming",
      emoji: "🎮",
      left: "55%",
      top: "40%",
    },
    {
      title: "Traveling",
      emoji: "🌍",
      left: "20%",
      top: "75%",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          header={"About Me"}
          title={"A Quick Look Into my World"}
          subtitle={
            "Learn more about who I am, what I love to do, and what inspires me"
          }
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title={"My Reads"}
                description={"Explore the books shaping my perspectives."}
              />
              <div className="mx-auto mt-2 w-40 md:mt-0">
                <Image src={bookImage} alt={"Book cover"} />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title={"My Toolbox"}
                description={"Explore the tech and tools I use on daily basis."}
              />
              <ToolboxItems items={toolboxItems} />
              <ToolboxItems
                className="mt-6"
                items={toolboxItems}
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="flex h-[320px] flex-col p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                title={"Beyond the Code"}
                description={"Explore my interests and hobbies."}
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5"
                    style={{ left: hobby.left, top: hobby.top }}
                  >
                    <span className="text-sm font-medium text-gray-900">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="relative h-[320px] p-0 md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt={"map"}
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-900/30 after:content-['']">
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
