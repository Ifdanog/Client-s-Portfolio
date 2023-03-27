import { FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <div className='bg-gold py-4 text-center block md:flex gap-4 justify-between px-20 items-center align-center'>
        <div className='flex gap-8 text-center md:text-left'>
          <a href="https://twitter.com/GabrielOla56404?t=_2WIKud3ymUg2vy-0POWTQ&s=09" target='_blank'>
            <FaTwitter className='text-6xl text-center' />
          </a>
          <a href="https://www.linkedin.com/in/kolawole-olawuwo-63004426a" target='_blank'>
            <FaLinkedin className='text-6xl' />
          </a>
        </div>
      <p className='font-bold pt-4'>Created by <a href="https://twitter.com/OgunniyiDanie12" className='underline' target='_blank'>Dev_Dan</a></p>
      </div>
    </footer>
  )
}

export default Footer
