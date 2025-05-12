import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Fetch from "./pages/Fetch";
import ReactQueryFetch from "./pages/ReactQueryFetch";
import ReactQueryFetchByClick from "./pages/ReactQueryFetchByClick";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/react-query-fetch" element={<ReactQueryFetch />} />
          <Route path="/react-query-fetch-by-click" element={<ReactQueryFetchByClick />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
