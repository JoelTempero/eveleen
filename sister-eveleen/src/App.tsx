import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Retreats from './pages/Retreats'
import RetreatDetail from './pages/RetreatDetail'
import BookARoom from './pages/BookARoom'
import RoomDetail from './pages/RoomDetail'
import WhyRetreat from './pages/WhyRetreat'
import News from './pages/News'
import NewsPost from './pages/NewsPost'
import History from './pages/History'
import BecomeAFriend from './pages/BecomeAFriend'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/retreats" element={<Retreats />} />
          <Route path="/retreats/:slug" element={<RetreatDetail />} />
          <Route path="/book-a-room" element={<BookARoom />} />
          <Route path="/book-a-room/:slug" element={<RoomDetail />} />
          <Route path="/why-go-on-a-retreat" element={<WhyRetreat />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsPost />} />
          <Route path="/history" element={<History />} />
          <Route path="/become-a-friend" element={<BecomeAFriend />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
