import React,{useState,useEffect,useContext} from 'react';
import { UserContext } from "../../App";


function Userlist() {
  
   const [Followinglist, setFollowinglist] = useState([]);
   const [state, dispatch] = useContext(UserContext);
   const [FollwingUsers, setFollwingUsers] = useState([]);


   function getFollwingUserList() {
    Followinglist.map((item) => {
      return(
        <>
           {
             fetch(`/profile/${item}`,{
              method : "GET",
              headers : {
               "Content-type" : "application/json",
               Authorization: "Bearer " + localStorage.getItem("jwt"),
              }
            })
            .then(res => res.json())
            .then(result => 
              {
                setFollwingUsers(...FollwingUsers,result)
                console.log(result);
                //  console.log(FollwingUsers.length);
              })
              .catch(err => console.log(err))
           }
         </>
      )
    })
}
   // eslint-disable-next-line no-unused-expressions

   
   useEffect(() => {
    fetch(`/profile/${state ? state._id : "error" }/following`,{
      method : "GET",
      headers : {
       "Content-type" : "application/json",
       Authorization: "Bearer " + localStorage.getItem("jwt"),
      }
    })
  .then((res) => res.json())
  .then(result => setFollowinglist(result.following))
  .catch(err => console.log(err));
}, []);

useEffect(() => {
  getFollwingUserList();
}, [Followinglist])

console.log(FollwingUsers);

return (
   <div className="Searchmodal">
    <div className="modalContent">
      <div style={{ borderBottom: "1px solid #cacaca" }}>
      {/* <Link to={"/"}>
                <button className="cancelbtn" onClick={() => navigate("/") }>
                  <img src={close} style={{ width: "30px", height: "30px" }} />
                </button>
      </Link> */}
        <div>
          <h5 style={{ margin: "0px", fontWeight: "500" }}>following</h5>
        </div>
        {/* <form>
          <input
            id="searchbar"
            type="text"
            placeholder="Search .."
            autoFocus
            value={search}
            onChange={(e) => fetchUsers(e.target.value)}
          />
        </form> */}
      </div>
      <div className="userDisplayContainer">
        <span>{Followinglist.length}</span>
        {
         FollwingUsers.length != undefined ? 
          FollwingUsers.map( (item) => {
            return(
              <div>
              <span>{item.name}</span>
              {/* <span>{FollwingUsers.length}</span> */}
              </div>
            )
          }
           )
          :  <span> loading....</span>
        }
        {/* <div>{FollwingUser}</div> */}

        {/* {userDetails.slice(0).reverse().map((item) => { */}
          {/* return (
         
           <Link to={item._id !== state._id ? "/profile/"+ item._id : '/profile'}
            
            // onClick={() => setIsopen(false)}
           >
            <div className="userContainer">
              <img
                src={item.pic}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              />
              <span className="userNames">{item.name}</span>
            </div>
            </Link>    
          ); */}
        {/* })} */}
      </div>
    </div>
  </div>
  )
}

export default Userlist