import React,{useState,useEffect } from 'react';
import './PostDetail.css';
import user from '../../icons/user.png';
import like from '../../icons/like.png';
import cmnt from '../../icons/cmt.png';
import more from '../../icons/more.png';
import emoji from '../../icons/emoji.png';
import send from '../../icons/send.png';
import close from '../../icons/close.png';


function PostDetail({postId}){  

  const [postData,setPostData] = useState([]);
   console.log(postId);
   useEffect(() => {
    fetch(`/allpost/${postId}`,{
      headers :{
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    }).then(res => res.json())
    .then(result => {
      console.log(result);
      setPostData(result);
    })
   }, [])

  return (
    <>
    { postData.postedBy ? 
            <div className='PostDetailContainer'>
              <div className='model'>
              <div className='PostContainer'> 
                  <img src={postData.photo} alt="bc .. bc .. bc" className='postImage'/>
              </div>

              <div className='detailContainer'>
                   <div className='header'>
                    <img src={postData.postedBy.pic} style={{"width":"40px","height":"40px","borderRadius":"50%"}}  alt='dp'/>
                     <span className='postAuthor'>{postData.postedBy.name}</span>
                    <button className='moreBtn'><img src={more} style={{"width":"20px","height":"20px"}}></img></button></div>
              
                 <div className='postbody'>
                     <div className='captionContainer'>
                     <img src={postData.postedBy.pic} alt=''style={{"width":"35px","height":"35px","borderRadius":"50%"}} ></img>
                     <span style={{"margin":"0px 5px"}}><b>{postData.postedBy.name}</b></span>
                          <span>{postData.body}</span>
                     </div>
                     {
                        postData.comments.slice(0).reverse().map((info) => {
                          return(
                          <div className='commentContainer'>
                          <img src={info.postedBy.pic} alt=''style={{"width":"35px","height":"35px","borderRadius":"50%"}} ></img>
                          <span style={{"margin":"0px 5px","fontWeight":"600"}}>{info.postedBy.name}</span>
                          <span>{info.text}</span>
                          </div>
                          )
                        }) 
                }
                 </div> 
                 <div className='footer'>
                     <div style={{"display":"flex",
                                  "alignItems":"center",
                                  marginBottom: "10px",
                                 }}>
                        <img src={like} style={{"width":"20px","height":"20px", marginRight:"15px","cursor":"pointer"}}/>
                        <img src={cmnt} style={{"width":"20px","height":"20px", marginRight:"15px","cursor":"pointer"}}/>
                        <img src={send} style={{"width":"20px","height":"20px","cursor":"pointer"}}/>
                        {/* <img src={like} style={{"width":"25px","height":"25px","alignSelf":"flex-end"}}/> */}
                     </div>
                     {/* <span className='likesCount'>{postData.likes.length} likes</span> */}
                     <span style={{"color":"grey","fontSize":"9px"}}>2 days ago</span>
                 </div>
                 <div style={{"display":"flex","alignItems":"center"}}>
                     <img src={emoji} style={{"width":"30px","height":"30px",padding:"5px","cursor":"pointer",height:"100%"}} alt="img"/>
                     <input type="text" id='cmntSection' placeholder='add a comment'/>
                     <button className='postBtn'>Post</button>
                 </div>
              </div>
        </div>
        {/* <button className='cancelbtn'>
               <img  src={close} 
                    style={{"width": "30px",
                   "height": "30px"}}
               
               />
               </button> */}
            </div>     : <span>Loading....</span>     }
            </>     
  )
}

export default PostDetail