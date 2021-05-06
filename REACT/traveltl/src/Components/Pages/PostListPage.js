import React from 'react'
import Footer from '../Footer'
import Post from '../Post'

function PostListPage(props) {
    return (
        <div id="layoutSidenav_content">
            <Post postData={props.postData}/>
            <Footer />
        </div>
    )
}

export default PostListPage
