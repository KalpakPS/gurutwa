import { useEffect, useState } from 'react'
import Loading from './components/Loading'
import VideoAnimation from './components/video/VideoAnimation'
import NavBar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS


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

      {!isLoading && !showVideo && (
        <div>
          <NavBar />
          <h1>Welcome to Gurutwa Tech Fest</h1>
          <p>Exciting events and updates are coming soon!</p>
        </div>
      )}
    </div>
  )
}

export default App