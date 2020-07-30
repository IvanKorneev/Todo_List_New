import React from 'react';
import './post-list-item.css'

const PostListItem = ({label, onDelete, onToggleLiked, onToggleImportant, important, like}) => {

    let className = "app-list-item d-flex justify-content-between";

    if (important) {
        className += ' important';
    }
    if (like) {
        className += ' like';
    }

    return (
        <div className={className}>
            <span onClick={onToggleLiked} className="app-list-item-label">
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn-star btn-sm"
                        onClick={onToggleImportant}>
                    <i className="fa fa-star"></i>
                </button>
                <button className="btn-trash btn-sm" onClick={onDelete}>
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
    )
}

export default PostListItem
