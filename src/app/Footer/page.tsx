import React from 'react'
export default function Footer() {
  return (
    <div>
      <footer className='flex flex-col h-44 py-5'>
      <h3 className='text-center text-3xl hover:text-cyan-600 text-blue-900 font-bold mb-8 py-6'>Tank You For Shopping!!!</h3>
      <p className='text-center text-2xl hover:text-cyan-700 text-blue-900 font-medium mb-8 py-1' >Your order  will be delivered in 3 business days</p>
        <div className='flex flex-row justify-center gap-8'>
        
          <a href="https://www.facebook.com/share/hFyL6uw6Yps1ZCJM/" target='blank' rel='nofollow noopener'>
            <img src='https://cdn-icons-png.flaticon.com/128/5968/5968764.png' alt='facebook logo' />
          </a>
          <a href="https://www.linkedin.com/in/saira-nasir-935bb1230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank' rel='nofollow noopener'>
            <img src='https://cdn-icons-png.flaticon.com/128/4494/4494497.png' alt='linkdin logo' />
          </a>
          <a href="https://twitter.com" target='blank' rel='nofollow noopener'>
            <img src='https://cdn-icons-png.flaticon.com/128/4494/4494477.png' alt='Tweiter logo' />
          </a>
         
        </div>
        <h3 className='text-center text-2xl hover:text-cyan-600 text-blue-900 font-bold mb-8 py-6'>Created By Hassan Imam. </h3>
        <br />
        <br />
      </footer>
    </div>
  )
}