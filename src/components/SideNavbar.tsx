import { useState, useEffect } from "react";
import { FiHome, FiActivity, FiInfo, FiMenu, FiX } from "react-icons/fi";

export default function SideNavbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const getIconClasses = (id: string) => {
    const isActive = activeSection === id;
    return `flex items-center justify-center w-10 h-10 rounded-full transition ${
      isActive
        ? "bg-sky-500 text-white shadow-lg"
        : "text-gray-700 hover:bg-gray-100"
    }`;
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-[1000] p-2 bg-white rounded-full shadow-md md:hidden"
      >
        {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-1/2 left-6 -translate-y-1/2 z-[999] transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-32"
        } md:translate-x-0`}
      >
        <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="text-3xl text-sky-500 font-bold cursor-pointer">🌊</div>

          {/* Links */}
          <nav className="flex flex-col items-center gap-6">
            <a href="#home" className="group flex flex-col items-center" onClick={() => setIsOpen(false)}>
              <span className={getIconClasses("home")}>
                <FiHome size={20} />
              </span>
              <span className="opacity-0 group-hover:opacity-100 text-xs mt-1 transition">
                Home
              </span>
            </a>

            <a href="#status" className="group flex flex-col items-center" onClick={() => setIsOpen(false)}>
              <span className={getIconClasses("status")}>
                <FiActivity size={20} />
              </span>
              <span className="opacity-0 group-hover:opacity-100 text-xs mt-1 transition">
                Status
              </span>
            </a>

            <a href="#about" className="group flex flex-col items-center" onClick={() => setIsOpen(false)}>
              <span className={getIconClasses("about")}>
                <FiInfo size={20} />
              </span>
              <span className="opacity-0 group-hover:opacity-100 text-xs mt-1 transition">
                About
              </span>
            </a>
          </nav>
        </div>
      </aside>
    </>
  );
}
