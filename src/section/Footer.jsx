import React from 'react'

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 w-full max-w-screen-lg mx-auto flex justify-center items-center flex-wrap gap-5">
      <div className='text-white-500 flex gap-2'>
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className='flex gap-3'>
        <a href="https://github.com/Klaudiusz321" className='social-icon' target="_blank" rel="noopener noreferrer">
          <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2' />
        </a>
        <a href="https://x.com/Claudiusdesign" className='social-icon' target="_blank" rel="noopener noreferrer">
          <img src="/assets/twitter.svg" alt="twitter" className='w-1/2 h-1/2' />
        </a>
        <a href="https://www.instagram.com/klaudiusz_sroka/" className='social-icon' target="_blank" rel="noopener noreferrer">
          <img src="/assets/instagram.svg" alt="instagram" className='w-1/2 h-1/2' />
        </a>
      </div>
      <p className='text-white-500'>© 2024 Klaudiusz. All rights reserved.</p>
    </section>
  )
}

export default Footer
