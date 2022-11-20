import React from 'react'

function Sidebar() {
  return (
    <div className='Sidebar'>
           <header className='sidebarheader'>
            <img className='logo-img' alt='logo'></img>
            <i className='logo-icon uil uil-instagram'></i>
           </header>
           <div className='navDiv' >
            <a className='sbBtn'>
              <span className='sbBTNname'>
               <i className='logo-icon uil uil-location-arrow'> <span>13</span></i>
               <span>Messages</span>
               </span>
            </a>
            <a className='sbBtn'>
              <span className='sbBTNname'>
               <i className='logo-icon uil uil-heart'><em></em></i>
               <span>Notification</span>
               </span>
            </a>
     
           </div>
    </div>
  )
}

export default Sidebar