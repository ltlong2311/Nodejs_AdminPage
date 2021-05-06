import "./App.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import Navigation from "./Navigation";
import Content from "./Overview";
import RouterURL from "../Router/router";
import { BrowserRouter as Router } from "react-router-dom";

const getPostData = () => {
  return axios.get("http://localhost:4000/getdata").then((res) => res.data);
};

function App() {
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
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
