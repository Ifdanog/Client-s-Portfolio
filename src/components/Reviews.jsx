import danielDP from '../assets/Daniel-dp.jpg'
import favourDP from '../assets/Favour-dp.jpg'
import dorcasDP from '../assets/Dorcas-dp.jpg'
import israelDP from '../assets/Israel-dp.jpg'
import naomiDP from '../assets/Naomi-dp.jpg'
import nickDP from '../assets/nick.jpg'
import raphDP from '../assets/Raph-dp.jpg'
import samuelDP from '../assets/Samuel.jpg'

function Reviews() {
  return (
    <div>
        <h1 className="l-spacing text-center text-slate-500 py-8">REVIEWS</h1>
        <h1 className='text-5xl font-bold text-center overflow-hidden'>OUR REVIEWS.</h1>
      <div className="w-full md:w-4/5 px-4 md:px-0 md mx-auto block md:grid md:grid-cols-2 lg:grid-cols-3 pt-8 gap-4 py-20">
        <div className="grid grid-cols-2 gap-4 bg-gold mb-4 p-8 rounded-lg p-4">
            <img src={danielDP} alt="" />
            <div>
                <h1 className='font-bold'>Daniel Ogunniyi</h1>
                <p className='text-sm text-slate-500'>Great job here, Kudos to you..</p>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4 bg-gold mb-4 p-8 rounded-lg p-4">
            <img src={favourDP} alt="" />
            <div>
                <h1 className='font-bold'>Ojo John Favour</h1>
                <p className='text-sm text-slate-500'>Nice portfolio design</p>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4 bg-gold mb-4 p-8 rounded-lg p-4">
            <img src={dorcasDP} alt="" />
            <div>
                <h1 className='font-bold'>Dorcas Adebisi</h1>
                <p className='text-sm text-slate-500'>I could find no real fault with it so I would heartily commend the services for purchase.</p>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4 bg-gold mb-4 p-8 rounded-lg p-4">
            <img src={israelDP} alt="" />
            <div>
                <h1 className='font-bold'>Israel Ogunniyi</h1>
                <p className='text-sm text-slate-500'>I wish to wholeheartedly commend this website</p>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4 bg-gold mb-4 p-8 rounded-lg p-4">
            <img src={naomiDP} alt="" />
            <div>
                <h1 className='font-bold'>Naomi Diran</h1>
                <p className='text-sm text-slate-500'>Mais avant cela, je voudrais vous féliciter pour votre travail très assidu sur cette affaire.</p>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4 bg-gold mb-4 p-8 rounded-lg p-4">
            <img src={nickDP} alt="" />
            <div>
                <h1 className='font-bold'>Nick Petit</h1>
                <p className='text-sm text-slate-500'>Extraordinary Designs here...</p>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4 bg-gold mb-4 p-8 rounded-lg p-4">
            <img src={raphDP} alt="" />
            <div>
                <h1 className='font-bold'>Raphael Eyitayo</h1>
                <p className='text-sm text-slate-500'>Thanks for putting in your quality time. Know quality is not an accident, it's always the result of an intelligence effort...</p>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4 bg-gold mb-4 p-8 rounded-lg p-4">
            <img src={samuelDP} alt="" />
            <div>
                <h1 className='font-bold'>Samuel Odedele</h1>
                <p className='text-sm text-slate-500'>Thumbs Up, Good work...</p>
            </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Reviews
