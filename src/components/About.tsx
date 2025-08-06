import { FaWater, FaWind, FaMapMarkedAlt } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 text-black flex flex-col justify-center items-center py-16 px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold font-[Heebo] mb-6 text-center">
          <span className="text-sky-600">About</span> WaveWatch
        </h2>

        {/* Intro paragraph */}
        <p className="max-w-3xl text-center text-gray-700 leading-relaxed mb-12 font-[Heebo] text-sm sm:text-base">
          WaveWatch is built for sea lovers, surfers, sailors, and fishing
          enthusiasts.  
          Our platform provides real-time data about wave conditions, wind speed,
          water temperature,  
          and even weather forecasts for the coming days — anywhere in the world.
        </p>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl w-full">
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
            <FaWater className="text-sky-500 text-4xl mb-4" />
            <h3 className="font-bold text-lg mb-2">Sea Data</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Reliable information about wave height, water temperature, and more.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
            <FaWind className="text-sky-500 text-4xl mb-4" />
            <h3 className="font-bold text-lg mb-2">Wind Speed</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Check wind strength and direction before heading to the sea.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
            <FaMapMarkedAlt className="text-sky-500 text-4xl mb-4" />
            <h3 className="font-bold text-lg mb-2">Global Locations</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Access weather and sea condition data from anywhere in the world.
            </p>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-12 text-sm text-gray-500 text-center">
          Built by{" "}
          <a
            href="https://benkatalan.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 hover:underline"
          >
            Ben Katalan
          </a>{" "}
          – With love for all surf lovers 🌊 <br />
          <span className="text-xs text-gray-400">
            Weather data provided by{" "}
            <a
              href="https://openweathermap.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:underline"
            >
              OpenWeather
            </a>
          </span>
        </p>
      </div>
    </section>
  );
}
