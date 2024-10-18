import About from "@/components/home/About";
import AllSkills from "@/components/home/AllSkills";
import Banner from "@/components/home/Banner";
import Contact from "@/components/home/Contact";
import Navbar from "@/components/home/Navbar";
import Projects from "@/components/home/Projects";
import ScrollTop from "@/components/home/ScrollTop";
import Social from "@/components/home/Social";
import Youtube from "@/components/home/Youtube";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Banner />
      <About />
      <AllSkills />
      <Projects />
      <Youtube />
      <Contact />
      <Social />
      <ScrollTop />
    </main>
  );
}
