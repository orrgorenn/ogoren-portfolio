"use client";

import ArrowDown from "@/assets/icons/arrow-down.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import StarIcon from "@/assets/icons/star.svg";
import grainImage from "@/assets/images/grain.jpg";
import memojiImage from "@/assets/images/memoji-computer.png";
import ContactForm from "@/components/contact-form";
import CustomModal from "@/components/custom-modal";
import HeroOrbit from "@/components/hero-orbit";
import { useModal } from "@/providers/modal-provider";
import Image from "next/image";

export default function Hero() {
  const { setOpen } = useModal();

  return (
    <div
      className="relative z-0 overflow-x-clip py-32 md:py-48 lg:py-60"
      id="home"
    >
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_50%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />
        <div className="hero-ring size-[650px]" />
        <div className="hero-ring size-[850px]" />
        <div className="hero-ring size-[1050px]" />
        <div className="hero-ring size-[1250px]" />
        <HeroOrbit size={430} rotation={-15} shouldOrbit orbitDuration={"30s"}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={75} shouldOrbit orbitDuration={"34s"}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={175} shouldOrbit orbitDuration={"38s"}>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration={"42s"}
          shouldSpin
          spinDuration={"10s"}
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={95}
          shouldOrbit
          orbitDuration={"46s"}
          shouldSpin
          spinDuration={"10s"}
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={140} shouldOrbit orbitDuration={"50s"}>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration={"54s"}
          shouldSpin
          spinDuration={"10s"}
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            alt="person peeking behind laptop"
            className="size-[100px]"
          />
          <div className="inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5">
            <div className="relative size-2.5 rounded-full bg-red-500">
              <div className="absolute inset-0 animate-ping-large rounded-full bg-red-500" />
            </div>
            <div className="text-sm font-medium">Currently Hired</div>
          </div>
        </div>
        <div className="mx-auto max-w-xl">
          <h1 className="mt-8 text-center font-serif text-3xl tracking-wide md:text-5xl">
            Full-Stack Developer & Backend Orientation
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            A Software Developer with 10+ years of personal experience, and 3+
            years of work experience.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <a
            className="inline-flex h-12 w-[190px] items-center gap-2 rounded-xl border border-white/15 px-6"
            href="#projects"
          >
            <span className="font-semibold">Previous Work</span>
            <ArrowDown className="size-4" />
          </a>
          <button
            className="inline-flex h-12 w-[190px] items-center justify-center gap-2 rounded-xl border border-white bg-white px-6 text-gray-900"
            onClick={() =>
              setOpen(
                <CustomModal>
                  <ContactForm />
                </CustomModal>
              )
            }
          >
            <span className="text-2xl">👋</span>
            <span className="font-semibold">Contact</span>
          </button>
        </div>
      </div>
    </div>
  );
}
