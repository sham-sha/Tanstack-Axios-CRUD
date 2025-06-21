import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Fetch from "./pages/Fetch";
import ReactQueryFetch from "./pages/ReactQueryFetch";
import ReactQueryFetchByClick from "./pages/ReactQueryFetchByClick";
import ReactQueryByID from "./pages/ReactQueryByID";
import PaginationQueries from "./pages/PaginationQueries";
import InfiniteQueries from "./pages/InfiniteQueries";
import UseQueriesDemo from "./pages/useQueriesDemo";
import { Result } from "antd";

function App() {
  // Import the Ant Design Result component
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
          <Route
            path="/react-pagination-query"
            element={<PaginationQueries />}
          />
          <Route path="/Infinite-scroll" element={<InfiniteQueries />} />
          <Route path="/use-queries" element={<UseQueriesDemo />} />
          <Route
            path="*"
            element={
              <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
