import "./App.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import Navigation from "./Navigation";
import RouterURL from "../Router/router";
import { BrowserRouter as Router } from "react-router-dom";
import AddPost from "./AddPost";
import {connect} from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getPostData = () => {
  return axios.get("/getdata").then((res) => res.data);
};

function App(props) {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    if (postData === null) {
      getPostData().then((res) => {
        setPostData(res);
      });
    }
  });
  console.log(postData);

  const [sbNav, setSbNav] = useState(false);
  const showSidebarToggle = () => {
    setSbNav(!sbNav);
  };

  const showAddPostForm  = () => {
    if(props.showAddPostForm){
      return <AddPost />
    }
  }
  return (
    <Router>
      <div className="App">
        <div
          className={
            sbNav ? "sb-nav-fixed sb-sidenav-toggled" : "sb-nav-fixed "
          }
        >
          <Nav showSidebarToggle={showSidebarToggle} />
          <div id="layoutSidenav">
            <Navigation />
            <RouterURL postData={postData}/>
            {showAddPostForm()}
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} newestOnTop closeOnClick />
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    notify: state.notify,
    showAddPostForm: state.showAddPostForm
  }
}


export default connect(mapStateToProps)(App)
