import React from "react";

function Nav(props) {
  const showSidebar = () => {
    props.showSidebarToggle();
  }     
  return (
   
    <div className="sb-nav-fixed">
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Trình quản trị
        </a>
        <button
          className="btn btn-link btn-sm order-1 order-lg-0"
          id="sidebarToggle"
          href="/"
          onClick={showSidebar}
        >
          <i className="fas fa-bars" />
        </button>
        {/* Navbar Search*/}
        <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Tìm kiếm..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </form>
        {/* Navbar*/}
        <ul className="navbar-nav ml-auto ml-md-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="userDropdown"
              href=" /"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="userDropdown"
            >
              <a className="dropdown-item" href=" /">
                Thiết lập
              </a>
              <a className="dropdown-item" href=" /">
                Nhật ký hoạt động
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="login.html">
                Đăng xuất
              </a>
            </div>
          </li>
          <li>
            <a
              className="nav-link"
              href=" /"
              title="home"
            >
              <i className="fas fa-home" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
