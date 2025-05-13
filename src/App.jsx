import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Fetch from "./pages/Fetch";
import ReactQueryFetch from "./pages/ReactQueryFetch";
import ReactQueryFetchByClick from "./pages/ReactQueryFetchByClick";
import ReactQueryByID from "./pages/ReactQueryByID";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/react-query" element={<ReactQueryFetch />} />
          <Route path="/react-query/:postId" element={<ReactQueryByID />} />
           <Route
            path="/react-query-fetch-byClick"
            element={<ReactQueryFetchByClick />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
