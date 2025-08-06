import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

export default function Status() {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const WEATHER_API_KEY = "107ecea728313b5b6600b64bf5ddc0d4";

  // חיפוש הצעות לערים בזמן הקלדה
  useEffect(() => {
    if (city.length < 2) {
      setSuggestions([]);
      return;
    }

    const fetchCities = async () => {
      try {
        const res = await fetch(
          `https://geodb-cities-api.wirefreethought.com/v1/geo/cities?namePrefix=${encodeURIComponent(city)}&limit=5&sort=-population`
        );
        const result = await res.json();
        setSuggestions(result.data.map((c: any) => `${c.city}, ${c.countryCode}`));
      } catch (err) {
        console.error("Error fetching city suggestions", err);
      }
    };

    fetchCities();
  }, [city]);

  // חיפוש מזג אוויר לפי עיר
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) return;

    try {
      setError("");
      setLoading(true);
      setData(null);

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${WEATHER_API_KEY}`
      );

      if (!res.ok) throw new Error("City not found");

      const result = await res.json();
      setData(result);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="status"
      className="min-h-screen bg-white text-black flex flex-col items-center py-20"
    >
      {/* כותרת */}
      <h2 className="text-4xl font-bold mb-6 font-[Heebo] text-sky-600">
        🌊 Check Wave & Weather Status
      </h2>
      <p className="text-gray-600 mb-10 font-[Heebo]">
        Search for any city to get real-time weather and sea conditions.
      </p>

      {/* טופס חיפוש */}
      <form
        onSubmit={handleSearch}
        className="relative flex items-center bg-gray-100 rounded-full shadow-lg px-4 py-2 w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="bg-transparent flex-1 outline-none px-2 text-lg"
        />
        <button
          type="submit"
          className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full transition"
        >
          <FiSearch />
        </button>

        {/* הצעות ערים */}
        {suggestions.length > 0 && (
          <ul className="absolute top-14 left-0 bg-white w-full rounded-lg shadow-md overflow-hidden z-10">
            {suggestions.map((s, i) => (
              <li
                key={i}
                onClick={() => {
                  setCity(s);
                  setSuggestions([]);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {s}
              </li>
            ))}
          </ul>
        )}
      </form>

      {/* הודעת שגיאה */}
      {error && (
        <div className="mt-6 flex items-center gap-2 bg-red-50 text-red-700 px-4 py-3 rounded-lg shadow">
          <span>{error}</span>
        </div>
      )}

      {/* טעינה */}
      {loading && <p className="mt-6 text-gray-500">Loading...</p>}

      {/* תוצאות */}
      {data && (
        <div className="mt-10 bg-gray-50 rounded-lg shadow-lg p-6 w-full max-w-md text-center">
          <h3 className="text-2xl font-bold mb-2">
            {data.name}, {data.sys.country}
          </h3>
          <p className="text-5xl font-bold mb-4">
            {Math.round(data.main.temp)}°C
          </p>
          <p className="text-gray-600 mb-2">
            Weather: {data.weather[0].description}
          </p>
          <p className="text-gray-600 mb-2">
            Humidity: {data.main.humidity}%
          </p>
          <p className="text-gray-600 mb-2">
            Wind: {data.wind.speed} m/s
          </p>
        </div>
      )}
    </section>
  );
}
