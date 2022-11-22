import React,{useContext} from 'react';
import { UserContext } from "../App"; 

function Sidebar() {
  const [state,dispatch]=useContext(UserContext);  
  return (
    <div className='Sidebar'>
           <header className='sidebarheader'>
            <img className='logo-img' alt='logo'></img>
            <i className='logo-icon uil uil-instagram'></i>
           </header>
           <div className='navDiv' >
            <a className='sbBtn'>
              <span className='sbBTNname'>
              <i class="uil uil-estate"></i>
               <span>Home</span>
               </span>
            </a>
            <a className='sbBtn'>
              <span className='sbBTNname'>
              <i class="uil uil-search"></i>
              
               <span>search</span>
               </span>
            </a>
            <a className='sbBtn'>
              <span className='sbBTNname'>
              <i class="uil uil-plus-circle"></i>
              
               <span>Create Post</span>
               </span>
            </a>
            <a className='sbBtn'>
              <span className='sbBTNname'>
              <i class="uil uil-user-check"></i>
               <span>Following</span>
               </span>
            </a>
            <a className='sbBtn'>
              <span className='sbBTNname'>
                {state ?   <img src={state.pic} className="profileImg"></img> : <span>loading </span> }
            
              
               <span>Profile</span>
               </span>
            </a>
            <a className='sbBtn'>
              <span className='sbBTNname'>
              <i class="uil uil-bars"> </i>
              
               <span>More</span>
               </span>
            </a>
     
           </div>
    </div>
  )
}

export default Sidebar