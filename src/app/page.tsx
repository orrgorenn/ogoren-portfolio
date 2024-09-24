import About from "@/sections/about";
import Contact from "@/sections/contact";
import Footer from "@/sections/footer";
import Header from "@/sections/header";
import Hero from "@/sections/hero";
import Projects from "@/sections/projects";
import Tape from "@/sections/tape";
import Testimonials from "@/sections/testimonials";

export default function Home() {
  const showTestimonials = false;

  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Tape />
      {showTestimonials && <Testimonials />}
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
