import React from 'react'

const CommentDetail = (props) =>{
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar"></img>
            </a>
            <div className="content">
            <a href="/" className="author">
                {props.author}
            </a>
            </div>
            <div className="metadata">
                <span className="date">{props.time}</span>
            </div>
            <div className="text">
                <p>{props.post}</p>
            </div>
        </div>
    );
}

export default CommentDetail;