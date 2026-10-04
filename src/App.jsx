import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import DesignGallery from './components/DesignGallery'
import Education from './components/Education'
import Presence from './components/Presence'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <DesignGallery />
        <Education />
        <Presence />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
