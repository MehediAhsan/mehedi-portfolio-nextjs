import About from "@/components/home/About";
import AllSkills from "@/components/home/AllSkills";
import Banner from "@/components/home/Banner";
import Contact from "@/components/home/Contact";
import Experience from "@/components/home/Experience";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import Projects from "@/components/home/Projects";
import ScrollTop from "@/components/home/ScrollTop";
import Social from "@/components/home/Social";
import Youtube from "@/components/home/Youtube";

export default function Home() {
  return (
    <main className="px-8 md:px-32">
      <Navbar />
      <Banner />
      <About />
      <AllSkills />
      <Experience />
      <Projects />
      <Youtube />
      <Contact />
      <Social />
      <ScrollTop />
      <Footer/>
    </main>
  );
}
