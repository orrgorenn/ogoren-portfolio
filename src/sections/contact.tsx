import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export default function Contact() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="relative z-0 overflow-hidden rounded-3xl bg-gradient-to-t from-emerald-300 to-sky-400 px-10 py-8 text-center text-gray-900 md:text-left">
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-14">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Don&apos;t hesitate to contact me
              </h2>
              <p className="mt-4 text-sm md:text-base">
                I am an experienced Full-Stack Developer with Backend
                orientation and I would love to hear from you!
              </p>
            </div>
            <div>
              <button className="inline-flex h-12 w-max items-center gap-2 rounded-xl border border-gray-900 bg-gray-900 px-6 text-white">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
