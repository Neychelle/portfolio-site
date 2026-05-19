import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white selection:bg-white/30">
      {/* 
        The ScrollyCanvas and Overlay share the same scroll space.
        We position them together so they overlap perfectly. 
      */}
      <div className="relative w-full">
        <ScrollyCanvas />
        <Overlay />
      </div>
      
      {/* 
        The Projects component naturally sits below the 500vh container.
      */}
      <Projects />

      {/* 
        Experience section with alternating timeline.
      */}
      <Experience />

      {/* 
        About section containing Education, Skills, and Achievements.
      */}
      <About />

      {/* 
        Footer section with contact info.
      */}
      <Footer />
    </main>
  );
}
