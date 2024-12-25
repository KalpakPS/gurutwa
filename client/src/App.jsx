import { useEffect, useState } from 'react'
import Loading from './components/Loading'
import VideoAnimation from './components/video/VideoAnimation'
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import HomePage from './pages/HomePage/HomePage';
import { Route, Routes, useLocation } from "react-router-dom";
import Events from './components/events/Events';

const App = () => {
  const [isLoading, setLoading] = useState(true)
  const [showVideo, setShowVideo] = useState(false); // State for video animation

 
  useEffect(() => {
    // Hide loading screen and show video after 5 seconds
    setTimeout(() => {
      setLoading(false); // Stop loading animation
      setShowVideo(true); // Show video
    }, 4000);

    // Hide video after 3 more seconds
    setTimeout(() => {
      setShowVideo(false); // Hide video
    }, 8000); // Total 8 seconds (5 + 3)
  }, []);

  return (
    <div>
      <Loading isLoading={isLoading} />
      <VideoAnimation showVideo={showVideo} />
      <NavBar />
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path='/' element={<HomePage />} />
      </Routes>

    </div>
  )
}

export default App