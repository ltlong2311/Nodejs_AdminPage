import React from "react";
import RowPost from "./RowPost";
import "./Overview.scss";
function Content(props) {
  
  return (
    <div id="overview">
      <div className="container-fluid">
        <h1 className="mt-4">Tổng quan</h1>

        <div className="row mt-4">
          <div className="col">
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-chart-line mr-1" />
                Lượt truy cập
              </div>
              <div className="card-body">
                <canvas id="myAreaChart" width="100%" height={40} />
              </div>
            </div>
          </div>
          {/* <div className="col-xl-6">
                    <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-chart-bar mr-1" />
                        Bar Chart Example
                    </div>
                    <div className="card-body"><canvas id="myBarChart" width="100%" height={40} /></div>
                    </div>
                </div> */}
        </div>
        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-running mr-1" />
            Thành viên tích cực
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing={0}
              >
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Nickname</th>
                    <th>Số lượt truy cập</th>
                    <th>Bình luận</th>
                    <th>Đặt tour</th>
                    <th>Đánh giá</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>TravelTL</td>
                    <td>321</td>
                    <td>61</td>
                    <td>25</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>LongThanh</td>
                    <td>230</td>
                    <td>50</td>
                    <td>14</td>
                    <td>14</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
