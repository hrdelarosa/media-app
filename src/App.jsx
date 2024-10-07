import { Route, Routes } from 'react-router-dom'
import Trending from './pages/Trending'
import NotFound404 from './pages/NotFound404'
import MovieDetails from './pages/MovieDetails'
import PeopleDetails from './pages/PeopleDetails'
import MediaPeople from './pages/MediaPeople'
import SerieDetails from './pages/SerieDetails'
import SeasonDetails from './pages/SeasonDetails'
import './App.css'
import Movies from './pages/Movies'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Trending />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/serie/:id" element={<SerieDetails />} />
      <Route path="/serie/:id/season/:seasonId" element={<SeasonDetails />} />
      <Route path="/people/:id" element={<PeopleDetails />} />
      <Route path="/people/:id/media" element={<MediaPeople />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  )
}

export default App
