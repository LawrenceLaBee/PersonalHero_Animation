import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="bg-[#121212]">
      <HeroSection numFrames={192} />
      <Skills />
      <Projects />
      <Resume />
      <About />

      <footer className="py-12 text-center text-white/30 text-sm">
        <p>&copy; {new Date().getFullYear()} Lawrence Labee IV. All rights reserved.</p>
      </footer>
    </main>
  );
}
