import { Route, Routes } from 'react-router-dom'
import Trending from './pages/Trending'
import NotFound404 from './pages/NotFound404'
import MovieDetails from './pages/MovieDetails'
import './App.css'
import PeopleDetails from './pages/PeopleDetails'
import MediaPeople from './pages/MediaPeople'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Trending />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/people/:id" element={<PeopleDetails />} />
      <Route path="/people/:id/media" element={<MediaPeople />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  )
}

export default App
