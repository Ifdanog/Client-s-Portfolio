function Portfolio() {
  return (
    <div className='bg-slate-100 py-20'>
      <h1 className="l-spacing text-center text-slate-500 py-8">PORTFOLIO</h1>
      <div className="w-full p-4 md:p-0 md:w-3/5 mx-auto block md:flex gap-8">
        <a href='https://fitnessandstylemagazine.com/5-main-benefits-of-self-defense/self-defense/' className='relative'>
          <img src="./src/assets/IMG-20230323-WA0008.jpg" alt="" className="w-full mb-4" />
          {/* <FaEdit /> */}
          <p className='text-2xl font-bold text-white absolute left-4 bottom-10'>5 Main Benefits of Self-Defense</p>
        </a>
        <a href='https://fitnessandstylemagazine.com/common-survival-self-defense-tactics/fitness/' className="relative">
          <img src="./src/assets/IMG-20230323-WA0009.jpg" alt="" className="w-full" />
          <p className='text-2xl font-bold text-white absolute left-4 bottom-10'>Common Survival Defense Tactics</p>
        </a>
      </div>
    </div>
  )
}

export default Portfolio
