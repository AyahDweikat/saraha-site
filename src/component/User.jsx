import axios from "axios";
import React, { useEffect, useState } from "react";
import './User.css';
function User({allUser}) {
  const [success, setSuccess] = useState('')
  const [allUsers, setAllUsers] = useState([]);
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState({});//
  const [message, setMessage] =  useState({text:''})

  useEffect(() => {
    if(allUser !==[]){
      setAllUsers(allUser);
    }
  }, [allUser]);
  
  function onTextChange(e){
    setUserName(e.target.value)
  }
  function onClicked(e){
    e.preventDefault();
    allUsers.map((item)=>{
      if(item.userName === userName){
        
        return setUserData(item);
      }
    })
    setUserName('');
  }
  function onTextAreaChange(e){
    setMessage({[e.target.name]: e.target.value});
  }
  function onSubmitClick(e){
    e.preventDefault();
    sendMessages(userData._id);
  }
  async function sendMessages(_id){
    let {data}= await axios.post(`http://localhost:3000/api/v1/message/${_id}`,message);
    // console.log(data)
    if(data.message ==="Dnoe "){
    setMessage({text:''})
    }
  }
  return (
    <>
      <div>
        <div className="container text-center py-5 my-5 text-center">
          <div className="card py-5 mb-5">
            <a href="" data-toggle="modal" data-target="#profile">
              <img src="avatar.png" className="avatar" alt="there are img" />
            </a>
            <div className="search-form">
              <form className="d-flex" role="search" onSubmit={onClicked}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="enter username"
                  onChange={onTextChange}
                  value={userName}
                  aria-label="Search"
                />
                <button className="btn btn-success btnSearch" type="submit">
                  Search
                </button>
              </form>
            </div>

            <h3 className="py-2">{userData.userName}</h3>
            <div className="container w-50 m-auto">
              <form action="" method="post" 
              onSubmit={onSubmitClick}
              >
                <textarea
                  className="form-control"
                  name="text"
                  id=""
                  cols={10}
                  rows={9}
                  placeholder="You cannot send a Sarahah to yourself, share your profile with your friends :)"
                  // defaultValue={""}
                  onChange={onTextAreaChange}
                  value={message.text}
                />
                <button type='submit' className="btn btn-outline-info mt-3 btnSend">
                  <i className="far fa-paper-plane" /> Send
                </button>
              </form>
            </div>
          </div>
          <button
            data-toggle="modal"
            data-target="#share"
            className="btn btn-default-outline share "
          >
            <i className="fas fa-share-alt" /> Share Profile
          </button>
        </div>
        {/*  Share profile Modal */}
        <div
          className="modal fade"
          id="share"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Share Profile
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>host/messages/id</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
