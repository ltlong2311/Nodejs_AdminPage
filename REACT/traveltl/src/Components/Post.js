import React from "react";
import "./Post.scss";
import RowPost from "./RowPost";
import {connect} from 'react-redux'

function Post(props) {
  const showData = () => {
    if (props.postData !== null) {
      return props.postData.map((value, key) => {
        return (
          <RowPost
            key={key}
            title={value.post_name}
            category={value.post_category}
            image={value.image}
            user={value.poster}
            id={value.id}
          />
        );
      });
    }
  };
  return (
    <div id="post-list">
      <div className="container-fluid">
        {/* <h4 className="mt-4">Danh sách bài đăng</h4> */}

        <div className="card mb-4 mt-4">
          <div className="d-flex card-header mb-3">
            <h5 className="mr-1">Danh sách bài đăng</h5>
            <div className="ml-auto" id="button-add">
              <div onClick={() => props.showAddPostForm()} className="btn btn-info btn-add">+</div>
              <span> Thêm bài đăng</span>
            </div>
          </div>
          
          <div className="form-group col-3 mt-2 d-flex">
            <label>Tìm: </label>
            <input
              type="text"
              className="form-control"
              id="input-search"
              aria-describedby="helpId"
              placeholder="ID, người đăng, tiêu đề ..."
            />
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
                    <th scope="col">STT</th>
                    <th scope="col">Tiêu đề</th>
                    <th scope="col">Người đăng</th>
                    <th scope="col">Thể loại</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">ID</th>
                    <th scope="col">Chức năng</th>
                  </tr>
                </thead>
                <tbody>{showData()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    showAddPostForm: () => {
      dispatch({
        type: "SHOW_ADD_POST_FORM",
      })
    }
  }
}
export default connect(null,mapDispatchToProps)(Post);
