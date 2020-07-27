import React from 'react';
import './post-add-form copy.css'

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="?"
                className="form-control new-post-label"/>
            <button type="submit"
                    className="btn btn-outline-secondary">
                Add
            </button>
        </form>
    )
}
export default PostAddForm;