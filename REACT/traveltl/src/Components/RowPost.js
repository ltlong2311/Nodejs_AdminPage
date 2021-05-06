import React from 'react'

function RowPost(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.user}LongThanh23</td>
      <td>{props.category}</td>
      <td>{props.image}</td>
      <td>{props.id}</td>
      <td>
        <div className="button-group">
          <span className="btn btn-primary">Trạng thái</span>
          <span className="btn btn-info">Sửa</span>
          <span className="btn btn-success">Xóa</span>
        </div>
      </td>
    </tr> 
  )
}

export default RowPost
