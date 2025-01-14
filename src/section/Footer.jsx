import React from 'react'

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 w-full max-w-screen-lg mx-auto flex justify-center items-center flex-wrap gap-5">
      <div className='text-white-500 flex gap-2'>
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Politicy</p>
      </div>
      <div className='flex gap-3'>
        <div className='social-icon' href="https://github.com/Klaudiusz321"> 
          <img  src="/assets/github.svg" alt="github" className='w-1/2 h-1/2'  />
        </div>
        <div className='social-icon' href="https://x.com/Claudiusdesign"> 
          <img  src="/assets/twitter.svg" alt="twitter" className='w-1/2 h-1/2'  />
        </div>
        <div className='social-icon' href="https://www.instagram.com/klaudiusz_sroka/"> 
          <img  src="/assets/instagram.svg" alt="insagram" className='w-1/2 h-1/2' />
        </div>
      </div>
      <p className='text-white-500'>© 2024 Klaudiusz. All rights reserved.</p>
    </section>
  )
}

export default Footer