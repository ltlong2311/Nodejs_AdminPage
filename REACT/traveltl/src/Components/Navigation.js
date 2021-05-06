import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Navigation() {
  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Thông tin</div>
            <Link className="nav-link" smooth to="/overview" data-target="#overview" title="">
              <div className="sb-nav-link-icon">
                <i className="fas fa-th-large" />
              </div>
              Tổng quan
            </Link>
            <Link className="nav-link" href="/change-diary" title="">
              <div className="sb-nav-link-icon">
                <i className="fas fa-chart-bar" />
              </div>
              Nhật ký thay đổi
            </Link>
            <Link className="nav-link" href="index.html" title="">
              <div className="sb-nav-link-icon">
                <i className="fas fa-exclamation-circle" />
              </div>
              Vấn đề phát sinh
            </Link>
            <div className="sb-sidenav-menu-heading">Quản lý</div>
            <Link className="nav-link collapsed" href=" /">
              <div className="sb-nav-link-icon">
                <i className="fas fa-suitcase-rolling" />
              </div>
              Thông tin tour
            </Link>

            <Link
              className="nav-link collapsed"
              href=" /"
              data-toggle="collapse"
              data-target="#collapsePages"
              aria-expanded="false"
              aria-controls="collapsePages"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-user-alt" />
              </div>
              Thành viên
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </Link>
            <div
              className="collapse"
              id="collapsePages"
              aria-labelledby="headingTwo"
              data-parent="#sidenavAccordion"
            >
              <nav
                className="sb-sidenav-menu-nested nav accordion"
                id="sidenavAccordionPages"
              >
                <Link
                  className="nav-link collapsed"
                  href="/manager"
                  data-toggle="collapse"
                  data-target="#pagesCollapseAuth"
                  aria-expanded="false"
                  aria-controls="pagesCollapseAuth"
                  title="member"
                >
                  Thành viên quản lý
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" />
                  </div>
                </Link>
                <div
                  className="collapse"
                  id="pagesCollapseAuth"
                  aria-labelledby="headingOne"
                  data-parent="#sidenavAccordionPages"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" href="login.html" title="">
                      Thông tin
                    </Link>
                    <Link className="nav-link" href="register.html" title="">
                      Quyền
                    </Link>
                  </nav>
                </div>

                <Link className="nav-link" href="index.html" title="">
                  Người dùng
                </Link>
              </nav>
            </div>

            <Link
              className="nav-link collapsed"
              href=" /"
              data-toggle="collapse"
              data-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
              title=""
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-grip-vertical" />
              </div>
              Danh mục
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </Link>
            <div
              className="collapse"
              id="collapseLayouts"
              aria-labelledby="headingOne"
              data-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <Link className="nav-link" to="/post" title="">
                  Bài đăng
                </Link>
                <Link className="nav-link" to="layout-static.html" title="">
                  Tour yêu thích
                </Link>
                <Link
                  className="nav-link"
                  href="layout-sidenav-light.html"
                  title=""
                >
                  Điểm đến
                </Link>
                <Link
                  className="nav-link"
                  href="layout-sidenav-light.html"
                  title=""
                >
                  Thông báo
                </Link>
                <Link
                  className="nav-link"
                  href="layout-sidenav-light.html"
                  title=""
                >
                  Liên hệ
                </Link>
                <Link
                  className="nav-link"
                  href="layout-sidenav-light.html"
                  title=""
                >
                  Hoạt động du lịch
                </Link>
                <Link
                  className="nav-link"
                  href="layout-sidenav-light.html"
                  title=""
                >
                  Diễn đàn TravelTL
                </Link>
              </nav>
            </div>

            <div className="sb-sidenav-menu-heading">Khác</div>
            <Link className="nav-link" href="charts.html" title="">
              <div className="sb-nav-link-icon">
                <i className="fas fa-chart-area" />
              </div>
              Doanh thu
            </Link>
            <Link className="nav-link" href="tables.html" title="">
              <div className="sb-nav-link-icon">
                <i className="fas fa-book-reader" />
              </div>
              Chính sách
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
