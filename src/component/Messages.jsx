import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
function Message(token) {
  const [token_, setToken_] =  useState()
  useEffect(() => {
    // console.log(token);
    setToken_(token);
  }, []);
  useEffect(() => {
    // console.log(token_);
    fetchQuotes(token_);
  }, [token_]);

  const fetchQuotes = async (token) => {
    const res = await axios.get(`http://localhost:3000/api/v1/message/`, {
      headers: {
        authorization: `tariq__${token}`,
      },
    });
    console.log(res);
    if(res.status===200){
      // getMessages()
    }
    // getMessages()
    // return data;
    
  };
  // function authorization(){
  //   axios.interceptors.request.use(req => {
  //     // `req` is the Axios request config, so you can modify
  //     // the `headers`.
  //     req.headers.authorization = 'tariq__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzEwOTcwYjg3ODBmMWZkYjAwMmNjZSIsImlzTG9nZ2luIjp0cnVlLCJpYXQiOjE2NjgzNTI0MTN9.LuwEs4Qk4WsNxWCcfuxfUCwDMzzaJEw1FH3osPCjQKE';
  //     console.log(req);
  //     // getMessages();
  //     return req;
  //   });
  // }
  // async function getMessages(){
  //   let resp = await axios.get('localhost:3000/api/v1/message/');
  //   console.log(resp);
  // }
  

  return (
    <>
      <div>
        <div className="container text-center py-5 my-5 text-center">
          <div className="card pt-5">
            <a href="" data-toggle="modal" data-target="#profile">
              <img src="img/avatar.png" className="avatar " alt="" />
            </a>
            <h3 className="py-2">Ahmed Abd Al-Muti</h3>
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
                <p>You don't have any messages... </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
