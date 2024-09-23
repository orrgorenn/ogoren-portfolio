import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import Image, { StaticImageData } from "next/image";
import SectionHeader from "@/components/section-header";
import Card from "@/components/card";
import { Fragment } from "react";

type Testimonial = {
  name: string;
  position: string;
  text: string;
  avatar: StaticImageData;
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Nir Basal",
      position: "Project Lead, Ariel Properties",
      text: "Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla bla!",
      avatar: memojiAvatar1,
    },
    {
      name: "Russel Levy",
      position: "Chief Strategy Officer, ZoomInfo",
      text: "Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla bla!",
      avatar: memojiAvatar3,
    },
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          header={"Endorsements"}
          title={"What People Are Saying"}
          subtitle={"Don't just take my word for it..."}
        />
        <div className="-my-4 mt-12 flex overflow-x-clip py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] md:mt-24">
          <div className="animate-move-left flex flex-none gap-8 pr-8 [animation-duration:40s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {testimonials.map((testimonial: Testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs p-6 transition duration-300 hover:-rotate-3 md:max-w-md md:p-8"
                  >
                    <div className="flex items-center gap-4">
                      <div className="inline-flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-gray-700">
                        <Image
                          src={testimonial.avatar}
                          alt={`${testimonial.name}'s avatar`}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm md:mt-6 md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
