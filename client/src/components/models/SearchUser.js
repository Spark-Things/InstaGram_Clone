import React,{useEffect,useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import { UserContext } from "../App";

export default function SearchUser() {
  const [userDetails, setUserDetails] = useState([]);
  const [search, setSearch] = useState();
  const [state, dispatch] = useContext(UserContext);


  useEffect(() => {
    const getAllusers = () => {
      fetch("/allUsers", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
        .then((res) => res.json())
        .then((results) => {
          //   console.log(results);
          setUserDetails(results);
        });
    };
    getAllusers();
  }, []);

  const fetchUsers = (query) => {
    setSearch(query);
    fetch("/search-users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then((res) => res.json())
      .then((results) => {
        console.log(results);
        setUserDetails(results);
      });
  };


  return (
    <div className="Searchmodal">
          <div className="modalContent">
            <div style={{ borderBottom: "1px solid #cacaca" }}>
              <form>
                <input
                  id="searchbar"
                  type="text"
                  placeholder="Search .."
                  autoFocus
                  value={search}
                  onChange={(e) => fetchUsers(e.target.value)}
                />
              </form>
            </div>
            <div className="userDisplayContainer">
              {userDetails.map((item) => {
                return (
               
                 <Link to={item._id !== state._id ? "/profile/"+ item._id : '/profile'}
                  
                  onClick={() => setIsopen(false)}
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
                );
              })}
            </div>
          </div>
        </div>
  )
}
