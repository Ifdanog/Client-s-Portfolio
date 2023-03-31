import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Showcases from "./components/Showcases"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Services from "./components/Services"
import Reviews from "./components/Reviews"

function App() {
  return (
    <>
      <Navbar />
      <header>
        <div className="w-full md:w-3/5 ml-0 md:ml-20 mt-20 text-center md:text-left">
          <h1 className="text-xl font-semibold text-white">Hi!</h1>
          <h1 className='font-bold text-4xl md:text-6xl overflow-hidden text-white myname'>I'm Kolawole Oluwasina Olawuwo</h1>
          <p className="mt-2 text-white">A Writer</p>
          <a href='mailto:healthywrite65@gmail.com' target='_blank'>
            <button className='mt-10 text-sm md:text-normal px-4 py-2 border border-white rounded-full text-white bg-gold'>CONTACT ME NOW</button>
          </a>
        </div>
      </header>
      <Showcases />
      <About />
      <Portfolio />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </>
  )
}

export default App
