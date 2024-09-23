import Header from "@/sections/header";
import Hero from "@/sections/hero";
import Projects from "@/sections/projects";
import Tape from "@/sections/tape";
import Testimonials from "@/sections/testimonials";
import About from "@/sections/about";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Tape />
      <Testimonials />
      <About />
    </div>
  );
}
