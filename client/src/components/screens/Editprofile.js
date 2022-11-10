import React from 'react'

function Editprofile() {
  return (
    <div className='mainDiv'>
      <div className='editprofileContainer'>
        <div className="column1">
             <span className='items'>Edit Profile</span>
             <span className='items'>Change Password</span>
        </div>
        <div className='column2'>
                <img className='tags'></img>
                <div className="tagContainer">
                   <span className='tags'>name</span>
                   <input id='editPageInput'/>
                 </div>
             

                <h5 className='tags'>Username</h5>
                <h5 className='tags'>Website</h5>
                <h5 className='tags'>Bio</h5>
        </div>
      </div>
    </div>
  )
}

export default Editprofile