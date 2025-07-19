import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Weather from "./Weather";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
