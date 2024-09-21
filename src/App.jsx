import { Route, Routes } from 'react-router-dom'
import Trending from './pages/Trending'
import NotFound404 from './pages/NotFound404'
import MovieDetails from './pages/MovieDetails'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Trending />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  )
}

export default App
