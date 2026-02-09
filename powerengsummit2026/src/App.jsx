import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ImportantDates from './components/ImportantDates'
import Speakers from './components/Speakers'
import CallForAbstracts from './components/CallForAbstracts'
import Topics from './components/Topics'
import Gallery from './components/Gallery'
import Venue from './components/Venue'
import Registration from './components/Registration'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <ImportantDates />
      <Speakers />
      <CallForAbstracts />
      <Topics />
      <Gallery />
      <Venue />
      <Registration />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
