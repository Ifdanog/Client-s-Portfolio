import React from 'react'

function About() {
  return (
    <section className='block md:flex gap-4 p-4 md:p-20'>
      <div className='w-full'>
        <img src="./src/assets/DSC_3156.jpg" alt="" />
      </div>
      <div className='w-full py-20'>
          <h2 className='l-spacing text-center text-slate-500 py-8'>Who I Am?</h2>
          <p className='leading-8'>I am <b>KOLAWOLE OLUWASINA OLAWUWO</b>. I am a Medical Student and a health writing consultant who has the goal of helping Health Organisations and individuals communicate effectively.</p>
          <p className='leading-8'>I specialise my writing mostly on content relating to health and wellness, nutrition, fitness, medicine, yoga, healthcare and health news.</p>
          <p className='leading-8'>Some things I can help you with are:</p>
          <ul>
            <li className='leading-8'>✅ Blog posts</li>
            <li className='leading-8'>✅ Article writing</li>
            <li className='leading-8'>✅ Magazine writing</li>
            <li className='leading-8'>✅ Content writing</li>
            <li className='leading-8'>✅ Press releases</li>
            <li className='leading-8'>✅ Editing</li>
          </ul>
          <p className='leading-8'>Do you need a Health writer/editor/Content writer?</p>
          <p className='leading-8'>I'd love to work with you!</p>
          <p className='leading-8'>Send me an emaail, let's talk.</p>
          <p className='leading-8'>Email: <a href="mailto:healthywrite65@gmail.com" className='text-slate-700'>healthywrite65@gmail.com</a></p>
      </div>
      <hr />
    </section>
  )
}

export default About
