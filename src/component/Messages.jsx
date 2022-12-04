import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import './Messages.css'

function Messages({userData}) {
  const [name, setName ] =  useState('');
  const [id, setId] = useState('')
  const [token, setToken] = useState("");
  const [messages, setMessages]= useState([])
  let [searchParams, setSearchParams] = useSearchParams();//
  let loginEmail = searchParams.get('email');// take eamil from login
  function getToken(){
    let _token = localStorage.getItem('token');
    setToken(_token);
  }
  useEffect(()=>{
    getToken();
    if(userData !==[]){
      setName(getName);
    }
  },[])
  useEffect(()=>{
    if(localStorage.getItem('token')){
      fetchQuotes(token);
    }
  }, [token])
  const getName = ()=>{
    if(userData !==[]){
    //   console.log("empty")
    // }else{
      userData.map((item)=>{
        if(item.email === loginEmail){
          setName(item.userName);
          setId(item.id);
          return item.userName;
        }
      })
    }
  }

  const fetchQuotes = async (token) => {
    const {data} = await axios.get(`http://localhost:3000/api/v1/message/`, {
      headers: {
        authorization: `tariq__${token}`,
      },
    });
    if(data.message==='success'){
      console.log(data.messageList);
      setMessages(data.messageList);
      // getUserData(token);

    }
  };

  function deleteMsg(_id,idx){
    console.log(idx);
    let _messages=[...messages];
    
    _messages.splice(idx, 1);
    
    setMessages(_messages);
    sendMessages(_id);
  }
  async function sendMessages(id){
    console.log(id)
    let data= await axios.delete(`http://localhost:3000/api/v1/message/${id}`, 
    {
      headers: {
        authorization: `tariq__${token}`,
      }, params:{
        authorization: `tariq__${token}`,
      }
    }
    );
    console.log(data);
  }
  return (
    <>
      <div>
        <div className="container text-center py-5 my-5 text-center">
          <div className="card pt-5">
            <a href="" data-toggle="modal" data-target="#profile">
              <img src="avatar.webp" className="avatar " alt="" />
            </a>
            <h3 className="py-2">{name}</h3>
            <button
              data-toggle="modal"
              data-target="#share"
              className="btn btn-default-outline share "
            >
              <i className="fas fa-share-alt" /> Share Profile
            </button>
          </div>
        </div>
        {/* profile photo Modal */}
        <div
          className="modal fade"
          id="profile"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Change photo
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
                <div className="container">
                  <form action="" method="post">
                    <label htmlFor="" className="text-muted">
                      The file size of the photo should not exceed 7 MB
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      name="photo"
                      id=""
                    />
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-info">
                  Upload
                </button>
                <button type="button" className="btn btn-outline-danger">
                  Remove Photo
                </button>
              </div>
            </div>
          </div>
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
        {/* /modal */}
        {/* =================messages=================== */}
        <div className="container text-center my-5 text-center">
          <div className="row">
            <div className="col-md-12">
              <div className="card py-5">
                
                {/* {messages? <p>You don't have any messages... </p>
                : */}
                {messages.map((item, idx)=>{
                  return (
                  <div key={idx} className="d-flex msgList">
                    <p className="m-auto">{item.text}</p>
                    <button className="delBtn ms-auto" onClick={()=>deleteMsg(item._id, idx)}><i className="fa-solid fa-trash "></i></button>
                  </div>
                  )
                })}
                {/* <p>You don't have any messages... </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Messages;
