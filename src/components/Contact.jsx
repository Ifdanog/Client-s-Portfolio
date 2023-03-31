import React from 'react'

function Contact() {
  return (
    <div id='contact' className='p-4 md:p-20'>
      <div className='block md:flex gap-4 text-center md:text-left justify-between'> 
        <div>
          <p className=''>LET'S TALK</p>
          <h3 className='nextproject'><span className='aboutyour'>ABOUT YOUR</span> NEXT PROJECT<span>.</span></h3>
        </div>
        <a href='https://wa.me/message/VQDOTEJEAELOJI' target='_blank'>
          <button className='py-2 px-4 border border-black'>GET IN TOUCH</button>
        </a>
      </div>
    </div>
  )
}

export default Contact
