import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import zoominfoLogo from "@/assets/images/zoominfo-logo.png";
import Card from "@/components/card";
import SectionHeader from "@/components/section-header";
import Image, { StaticImageData } from "next/image";

type PortfolioProject = {
  id: number;
  company: string;
  year: string;
  title: string;
  results: Record<string, string>[];
  link: string;
  logo: StaticImageData;
};

export default function Projects() {
  const portfolioProjects: PortfolioProject[] = [
    {
      id: 1,
      company: "ZoomInfo",
      year: "06/2022 - Present",
      title: "Backend Developer",
      results: [
        {
          id: "1",
          title:
            "Reduced cloud costs by ~20% by optimizing system performance and solving bottlenecks.",
        },
        {
          id: "2",
          title:
            "Led the integration of 3rd-party services to enhance system capabilities, incl. implementing async data processing solutions.",
        },
        {
          id: "3",
          title:
            "Utilize various database systems, including MySQL, MongoDB, DocumentDB & Redis.",
        },
      ],
      link: "https://zoominfo.com",
      logo: zoominfoLogo,
    },
  ];

  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          header={"What have I done?"}
          title={"Work Experience"}
          subtitle={"CODE. COFFEE. REPEAT."}
        />
        <div className="mt-8 flex flex-col gap-20 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.id}
              className="sticky px-8 pb-0 pt-8 md:px-10 md:pt-12 lg:px-20 lg:pt-16"
              style={{ top: `calc(64px + ${index * 40}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-sm font-bold uppercase tracking-widest text-transparent">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="mt-4 border-t-2 border-white/5 md:mt-5" />
                  <ul className="mt-4 flex flex-col gap-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.id}
                        className="flex justify-items-start gap-2 text-sm text-white/50 md:text-sm"
                      >
                        <CheckCircleIcon className="size-5 flex-shrink-0 md:size-5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Image
                    src={project.logo}
                    alt={project.title}
                    className="mx-auto -mb-6 mt-8 rounded-3xl md:mb-4 md:size-36 lg:absolute lg:-right-10 lg:-mb-4 lg:mt-0 lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
