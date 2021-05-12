import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./AddPost.scss";

const addPostAction = (post_name, post_category, image, poster) => {
  return axios
    .post("/add-post", { post_name, post_category, image, poster })
    .then((resp) => resp.data);
};

function AddPost(props) {
  const [postTitle, setPostTitle] = useState("");
  const [postCategory, setPostCategory] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postContent, setPostContent] = useState("");

  const isTitleChange = (e) => {
    setPostTitle(e.target.value);
  };
  // console.log(postTitle);
  const isCategoryChange = (e) => {
    setPostCategory(e.target.value);
  };
  console.log(postCategory);
  const isImageChange = (e) => {
    setPostImage(e.target.value);
  };
  const isContentChange = (e) => {
    setPostContent(e.target.value);
  };
  const addDataPost = () => {
    var newPost = {};
    newPost.post_name = postTitle;
    newPost.post_category = postCategory;
    newPost.image = postImage;
    newPost.post_content = postContent;
    newPost.poster = "Travel TL";
    console.log(newPost);
    
    var post_name = postTitle;
    var post_category = postCategory;
    var image = postImage;
    // var post_content = postContent;
    var poster = "Travel TL";

    if (postTitle && postContent && postCategory) {
      // TH project lon, gui len store se tranh import axios o nhieu noi
      props.pushDataPost(newPost);
      //
      
      addPostAction(post_name, post_category, image, poster).then(
        (response) => {
          console.log(response);
        }
      );
      //
      console.log("Thêm " + JSON.stringify(newPost) + " thành công!");
      props.postSuccess("Đăng bài thành công!");
      setPostTitle("");
      setPostContent("");
    } else if (!postTitle) {
      props.postError("Chưa nhập tiêu đề!");
      setPostTitle("");
      setPostContent("");
    } else if (!postCategory) {
      props.postError("Không thể để trống thể loại tin!");
      setPostTitle("");
      setPostContent("");
    } else if (!postContent) {
      props.postError("Bài đăng không thiếu để trống nội dung!");
      setPostTitle("");
      setPostContent("");
    }
  };

  const closeAddForm = () => {
    props.changeAddForm();
    window.location.replace("/post");
  }
  return (
    <div id="create-post-form">
      <div onClick={() => props.changeAddForm()} className="overlay" />
      <div className="add-form">
        <button
          onClick={closeAddForm}
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">x</span>
        </button>
        <section className="page-section">
          <div className="container pt-2">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Thêm bài
            </h2>
          </div>
          <div className="divider-custom-line" />
          <hr />
          <div className="container">
            <div className="col mx-auto pt-3">
              <form id="contactForm" name="sentMessage" noValidate="novalidate">
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Tiêu đề :</label>
                    <input
                      onChange={(event) => isTitleChange(event)}
                      name="fName"
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Nhập tiêu đề viết hoa chữ cái đầu"
                      required="required"
                      data-validation-required-message="Please enter your name."
                      aria-invalid="false"
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Link ảnh :</label>
                    <input
                      onChange={(event) => isImageChange(event)}
                      name="fPhone"
                      className="form-control"
                      id="phone"
                      type="link"
                      placeholder="Link ảnh trực tiếp"
                      required="required"
                      data-validation-required-message="Please enter your phone number."
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Thể loại :</label>
                    <select
                      onChange={(event) => isCategoryChange(event)}
                      className="form-control"
                      name="fType"
                      id="type"
                    >
                      <option value="">---</option>
                      <option value="Du lịch">Du lịch</option>
                      <option value="Đánh giá">Đánh giá</option>
                      <option value="Review">Review</option>
                    </select>
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <div className="form-group">
                      <label></label>
                      <input
                        // onChange={(event) => isImageChange(event)}
                        type="file"
                        className="form-control-file"
                        name="fFile"
                        id=""
                        placeholder=""
                        aria-describedby="fileHelpId"
                      />
                    </div>
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Nội dung</label>
                    <textarea
                      onChange={(event) => isContentChange(event)}
                      name="fMess"
                      className="form-control"
                      style={{ overflowY: "scroll" }}
                      id="message"
                      rows={5}
                      placeholder="Nội dung bài đăng"
                      required="required"
                      data-validation-required-message="Please enter a message."
                      defaultValue={""}
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div id="success" />
                <div className="form-group text-center pt-2">
                  <button
                    className="btn btn-primary btn-xl"
                    onClick={addDataPost}
                    id="sendMessageButton"
                    type="button"
                  >
                    Thêm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    postSuccess: (notify) => {
      dispatch({ type: "NOTIFY_SUCCESS", notify });
    },
    postError: (notify) => {
      dispatch({ type: "NOTIFY_ERROR", notify });
    },
    changeAddForm: () => {
      dispatch({
        type: "SHOW_ADD_POST_FORM",
      });
    },
    pushDataPost: (newPost) => {
      dispatch({ type: "ADD_POST_DATA", newPost });
    },
  };
};

export default connect(null, mapDispatchToProps)(AddPost);
