import Hero from "@/Components/Hero/Hero";
import Navbar from "@/Components/Navbar/Navbar";
import Projects from "@/Components/Projects/Projects";
import Skills from "@/Components/Skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
    </>
  );
}
