import { FaArrowUp } from 'react-icons/fa'

function Navbar() {
  const showNavbar = () => {
    const ul =  document.querySelector('.sideNav');
    ul.classList.toggle('visible');
  } 
  return (
    <>
    <div id='navbar' className='h-20 px-4 md:px-20 py-2 flex items-center justify-between overflow-hidden'>
      <h1 className='text-xl md:text-4xl py-4 font-bold overflow-hidden'>KOO WRITES</h1>
      <p onClick={showNavbar} className='menuBtn'>☰</p>
      <nav>
        <ul className='topNav'>
          <li className='text-sm text-charcoal hover:text-tan cursor-pointer'>
            <a href="#navbar">Home</a>
          </li>
          <li className='text-sm text-charcoal hover:text-tan cursor-pointer'>
            <a href="#showcases">Showcases</a>
          </li>
          <li className='text-sm text-charcoal hover:text-tan cursor-pointer'>
            <a href="#about">About</a>
          </li>
          <li className='text-sm text-charcoal hover:text-tan cursor-pointer'>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className='text-sm text-charcoal hover:text-tan cursor-pointer'>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
    <nav className='sideNav'> 
      <ul>
        <li className='text-sm text-charcoal hover:text-tan cursor-pointer'>
          <a href="#navbar">Home</a>
        </li>
        <li className='text-sm text-charcoal hover:text-tan cursor-pointer'>
          <a href="#showcases">Showcases</a>
        </li>
        <li className='text-sm text-charcoal hover:text-tan cursor-pointer'>
          <a href="#about">About</a>
        </li>
        <li className='text-sm text-charcoal hover:text-tan cursor-pointer'>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className='text-sm text-charcoal hover:text-tan cursor-pointer'>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>

    
    <div className=''>
      <a href="#navbar" className='backToTop'>
        <FaArrowUp />
      </a>
    </div>
    </>
  )
}

export default Navbar
