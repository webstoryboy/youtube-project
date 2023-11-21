import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Today from './pages/Today'
import Traveler from './pages/Traveler'
import Channel from './pages/Channel'
import Header from './components/section/Header'
import Footer from './components/section/Footer'
import Main from './components/section/Main'
import Search from './pages/Search'
import Video from './pages/Video'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/traveler" element={<Traveler />} />
          <Route path="/channel/:channelId" element={<Channel />} />
          <Route path="/search/:searchId" element={<Search />} />
          <Route path="/video/:videoId" element={<Video />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App