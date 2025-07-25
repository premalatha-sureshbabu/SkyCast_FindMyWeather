import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (city.trim() === "") {
      setError("City name is required.");
      return;
    }
    setError("");
    navigate("/weather", { state: { city } });
  }, [city, navigate]);

  return (
    <div className="home-wrapper">
      <div className="form-card">
        <h1>SkyCast - Find My Weather</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
          />
          <button type="submit">Get Weather</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Home;
