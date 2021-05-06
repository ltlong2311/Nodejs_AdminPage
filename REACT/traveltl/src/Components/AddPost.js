import React, { useState } from 'react'

function AddPost() {
    const [postTitle, setPostTitle] = useState("");
    const [postCategory, setPostCategory] = useState("");
    const [postImage, setPostImage] = useState("");
    const [postContent, setPostContent] = useState("");

    isTitleChange =(event) => {
        const title = event.target.name;
        const value  = event.target.value;
        setPostTitle([[title] + ":" + value])
      }
    return (
        <div className="contact-page" id="contacts">
            <div className="container">
                <section className="page-section" id="contact">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Liên hệ</h2>
                </div>
                <div className="divider-custom-line" />
                <hr />
                <br />
                <div className="row">
                    <div className="col-lg-5 mx-auto">
                    <form id="contactForm" name="sentMessage" noValidate="novalidate">
                        <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Name</label>
                            <input onChange={(event) => isChange(event)} name="fName" className="form-control" id="name" type="text" placeholder="Họ tên" required="required" data-validation-required-message="Please enter your name." aria-invalid="false" />
                            <p className="help-block text-danger" />
                        </div>
                        </div>
                        <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Email Address</label>
                            <input onChange={(event) => isChange(event)} name="fEmail" className="form-control" id="email" type="email" placeholder="Email" required="required" data-validation-required-message="Please enter your email address." />
                            <p className="help-block text-danger" />
                        </div>
                        </div>
                        <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Phone Number</label>
                            <input onChange={(event) => isChange(event)} name="fPhone" className="form-control" id="phone" type="tel" placeholder="Số điện thoại" required="required" data-validation-required-message="Please enter your phone number." />
                            <p className="help-block text-danger" />
                        </div>
                        </div>
                        <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Contact Type</label>
                            <select onChange={(event) => isChange(event)} className="form-control" name="fType" id="type">
                            <option value="Report">Báo cáo</option>
                            <option value="Feedback">Phản hồi</option>
                            <option value="Contribute">Đóng góp</option>
                            </select>
                            <p className="help-block text-danger" />
                        </div>
                        </div>
                        <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <div className="form-group">
                            <label></label>
                            <input onChange={(event) => isFileChange(event)} type="file" className="form-control-file" name="fFile" id="" placeholder="" aria-describedby="fileHelpId" />
                            </div>
                            <p className="help-block text-danger" />
                        </div>
                        </div>
                        <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Message</label>
                            <textarea onChange={(event) => isChange(event)} name="fMess" className="form-control" id="message" rows={5} placeholder="Nội dung liên hệ" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                            <p className="help-block text-danger" />
                        </div>
                        </div>
                        <br />
                        <div id="success" />
                        <div className="form-group text-center"><button className="btn btn-primary btn-xl" onClick={(event) => submitForm(event)} id="sendMessageButton" type="submit">Send</button></div>
                    </form>
                    </div>
                </div>
                </section>
            </div>
        </div>
    )
}

export default AddPost
