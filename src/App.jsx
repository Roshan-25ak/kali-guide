import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import VideoList from "./pages/VideoList";
import VideoPlayer from "./pages/VideoPlayer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<VideoList />} />
          <Route path="/video/:id" element={<VideoPlayer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
