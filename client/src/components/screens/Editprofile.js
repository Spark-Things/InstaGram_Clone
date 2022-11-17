import React,{useContext} from 'react'
import { UserContext } from "../../App";
function Editprofile() {

  const [state, dispatch] = useContext(UserContext);

  return (
    <div className='mainDiv'>
      <div className='editprofileContainer'>
        <div className="column1">
             <span className='items'>Edit Profile</span>
             <span className='items'>Change Password</span>
        </div>
        <div className='column2'>
                <div className="imagetagContainer">
                   <img alt='img' src={state.pic} style={{"width":"50px",height:"50px"}}></img>
                   <div style={{"display":"flex","flexDirection":"column","alignItems":"center","marginLeft":"10px"}}>
                      <span className='uSername'>{state.username}</span>
                      <span className='cpp'>change profile photo</span>
                   </div>
                   {/* <input id='editPageInput'/> */}
                 </div>

                <div className="tagContainer">
                   <span className='tags'><b>Name</b></span>
                   <input id='editPageInput' value={state.name} />
                 </div>
                <div className="tagContainer">
                   <span className='tags'><b>Username</b></span>
                   <input id='editPageInput' value={state.username}/>
                 </div>
                <div className="tagContainer">
                   <span className='tags'><b>Website</b></span>
                   <input id='editPageInput'disabled={true} value="website" />
                 </div>
                <div className="tagContainer">
                   <span className='tags'><b>Bio</b></span>
                   <textarea id='editPageTextarea'></textarea>
                 </div>
                 <div className="tagContainer">
                   <span className='tags'><b>Email address</b></span>
                   <input id='editPageInput' value={state.email}/>
                 </div>
                 <div className="tagContainer">
                   <span className='tags'><b>Phone number</b></span>  
                   <input id='editPageInput'/>
                 </div>
                 <div className="tagContainer">
                   <span className='tags'><b>Gender</b></span>
                   <input id='editPageInput'/>
                 </div>

                 <button className='submitBtn'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Editprofile