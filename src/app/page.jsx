import About from "@/components/home/About";
import AllSkills from "@/components/home/AllSkills";
import Banner from "@/components/home/Banner";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <About />
      <AllSkills />
      <Projects />
    </main>
  );
}
