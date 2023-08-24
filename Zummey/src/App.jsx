import './App.css'
import ScrollToTop from './ScrollToTop';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'




function App() {

  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          <Footer/>
        </ScrollToTop>
      </Router>

    </div>
  )
}

export default App
