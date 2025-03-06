import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { PrivacyPolicy } from "./pages/Privacy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
