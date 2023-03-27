import { useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

function Navbar() {
  const [ navbar, setNavbar ] = useState(false)

  const showNavbar = () => {
    setNavbar(!navbar)
  } 
  return (
    <>
    <h1 className='text-xl md:text-4xl py-4 font-bold overflow-hidden'>KOO WRITES</h1>
    {/* <nav id='navbar' className='h-20 px-4 md:px-20 py-2 flex items-center justify-between'> 
      <h1 className='text-xl md:text-4xl font-bold overflow-hidden'>KOO WRITES</h1>
      <ul className='hidden md:flex gap-6'>
        <li className='text-sm text-charcoal hover:text-tan cursor-pointer'>Home</li>
        <li className='text-sm text-charcoal hover:text-tan cursor-pointer'>Showcases</li>
        <li className='text-sm text-charcoal hover:text-tan cursor-pointer'>About</li>
        <li className='text-sm text-charcoal hover:text-tan cursor-pointer'>Portfolio</li>
        <li className='text-sm text-charcoal hover:text-tan cursor-pointer'>Contact</li>
      </ul>
    </nav>
    <p onClick={showNavbar} className='re'>menu</p>
    <nav id='navbar' className='hidden md:block h-40 px-4 md:px-20 py-2 flex items-center justify-between'> 
      <ul className=''>
        <li className='text-sm text-charcoal hover:text-tan cursor-pointer'>Home</li>
        <li className='text-sm text-charcoal hover:text-tan cursor-pointer'>Showcases</li>
        <li className='text-sm text-charcoal hover:text-tan cursor-pointer'>About</li>
        <li className='text-sm text-charcoal hover:text-tan cursor-pointer'>Portfolio</li>
        <li className='text-sm text-charcoal hover:text-tan cursor-pointer'>Contact</li>
      </ul>
    </nav> */}
    <div className=''>
      <a href="#navbar" className='backToTop'>
        <FaArrowUp />
      </a>
    </div>
    </>
  )
}

export default Navbar
