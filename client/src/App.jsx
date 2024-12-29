import { useEffect, useState } from 'react'
import Loading from './components/Loading'
import VideoAnimation from './components/video/VideoAnimation'
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import HomePage from './pages/HomePage/HomePage';
import './index.css'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import EventsPage from './pages/EventsPage/EventsPage';
import About from './components/About/About';
import SingleEventPage from './pages/SingleEventPage/SingleEventPage';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop

const App = () => {
  const [isLoading, setLoading] = useState(true)
  const [showVideo, setShowVideo] = useState(false); // State for video animation

  useEffect(() => {
    // Hide loading screen and show video after 5 seconds
    setTimeout(() => {
      setLoading(false); // Stop loading animation
      //setShowVideo(true); // Show video
    }, 4000);

    // Hide video after 3 more seconds
    /*setTimeout(() => {
      setShowVideo(false); // Hide video
    }, 8000); // Total 8 seconds (5 + 3)*/
  }, []);

  return (
    <div>
      <Loading isLoading={isLoading} />
      <VideoAnimation showVideo={showVideo} />
      <NavBar />
      <ScrollToTop /> {/* Add ScrollToTop component */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/events' element={<EventsPage />}/>
        <Route path="/events/:eventId" element={<SingleEventPage />} />
        <Route path='/about' element={<About />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App