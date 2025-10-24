import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import News from './pages/News'
import NestedPages from './nested_routes/NestedPages'
import SuperheroList from './pages/SuperheroList'
import Cat from './pages/Cat'
import Color from './pages/Color'
import GhibliFilms from './pages/Ghibli'
import Counter from './components/Counter'
import WindowSize from './components/WindowSize'
import FetchUsers from './components/FetchUsers'
import NameSaver from './components/NameSaver'

function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <main
          style={{
            marginLeft: "230px", // same as expanded width
            transition: "margin-left 0.3s ease",
          }}
          className="main-content"
        >
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='*' element={<NotFound />}></Route>
            <Route path='/news' element={<News />}></Route>
            <Route path='/superhero' element={<SuperheroList />}></Route>
            <Route path='/cat' element={<Cat />}></Route>
            <Route path='/color' element={<Color />}></Route>
            <Route path='/ghibli' element={<GhibliFilms />}></Route>
            <Route path='/counter' element={<Counter />}></Route>
            <Route path='/name-saver' element={<NameSaver />}></Route>
            <Route path='/window-size' element={<WindowSize />}></Route>
            <Route path='/fetch-user' element={<FetchUsers />}></Route>
          </Routes>
        </main>
      </Router>
      
      {/* <NestedPages /> */}
    </>
  )
}

export default App