import React,{useState,useEffect } from 'react';
import './PostDetail.css';
import user from '../../icons/user.png';
import like from '../../icons/heart.png';
import cmnt from '../../icons/cmnt.png';
import more from '../../icons/more.png';


function PostDetail({postId}){  

  const [postData,setPostData] = useState([]);
  var data = "";
   console.log(postId);
   useEffect(() => {
    fetch(`/allpost/${postId}`,{
      headers :{
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    }).then(res => res.json())
    .then(result => {
      setPostData(result);
    })
   }, [])

  return (
    <div className='PostDetailContainer'>
        <div className='model'>
              <div className='PostContainer'> 
                  <img src={postData.photo} alt="bc .. bc .. bc" className='postImage'/>
              </div>
              <div className='detailContainer'>
                 <div className='header'>
                    {/* <img src={postData.postedBy.pic} style={{"width":"40px","height":"40px","borderRadius":"50%"}}  alt='dp'/> */}
                    {/* <span className='postAuthor'>{postData.postedBy.name}</span> */}
                    <button className='moreBtn'><img src={more} style={{"width":"20px","height":"20px"}}></img></button> 
                 </div>
                 <div className='postbody'>
                    <div className='commentContainer'>
                       <img src={postData.comments[0].postBy.pic} alt=''style={{"width":"40px","height":"40px","borderRadius":"50%"}} ></img>
                       <span></span>
                       <span>comment</span>
                    </div>
                 </div>
                 <div className='footer'>
                     <div style={{"display":"flex",
                                  "alignItems":"center",
                                  "justifyContent":"space-between",
                                  marginBottom: "10px"}}>
                        <img src={like} style={{"width":"25px","height":"25px"}}/>
                        <img src={cmnt} style={{"width":"25px","height":"25px"}}/>
                        {/* <img src={like} style={{"width":"25px","height":"25px"}}/> */}
                        <img src={like} style={{"width":"25px","height":"25px"}}/>
                     </div>
                     {/* <span className='likesCount'>{postData.likes.length} likes</span> */}
                     <span>TimeSpan</span>
                 </div>
                 <div>
                     <img style={{"width":"40px","height":"40px"}} alt="img"/>
                     <input type="text" id='cmntSection' placeholder='add a comment'/>
                     <a>Post</a>
                 </div>
              </div>
        </div>
      </div>
  )
}

export default PostDetail