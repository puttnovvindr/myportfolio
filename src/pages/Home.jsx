import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Experience from '../components/Experience'
import Project from '../components/Project'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import '../index.css'

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Experience />
      <Project />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Home