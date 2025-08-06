import { FiChevronDown } from "react-icons/fi";

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
      }}
    >
      {/* שכבת שחור */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* תוכן ה-Hero */}
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-[Heebo]">
          WaveWatch
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 font-[Heebo]">
          Welcome to WaveWatch, your go-to platform for real-time wave and weather updates.
        </p>
        <a
          href="#status"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-semibold text-lg transition-colors duration-200 shadow-lg"
        >
          Lets Wave Together
        </a>
      </div>

      {/* חץ גלילה */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-20 animate-bounce z-10 p-3 rounded-full bg-black/40 hover:bg-sky-500 transition duration-300"
        title="גלול למטה"
      >
        <FiChevronDown className="text-white text-3xl opacity-90" />
      </button>
    </section>
  );
}
