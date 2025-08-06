import About from "./components/About";
import Hero from "./components/Hero";
import SideNavbar from "./components/SideNavbar";
import Status from "./components/Status";

export default function App() {
  return (
    <div dir="ltr" className="bg-black text-white font-[Heebo]">
      <SideNavbar />
      <Hero />
      <Status />
      <About />
    </div>
  );
}
