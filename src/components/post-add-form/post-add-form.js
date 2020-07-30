import React, {Component} from 'react';
import './post-add-form copy.css'

export default class PostAddForm extends Component {
    state = {
        text: ''
    };
    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        })
    };
    onSubmit = (e) => {
        const {onAdd} = this.props;
        e.preventDefault()
        onAdd(this.state.text)
        this.setState({text:''});
    }

    render() {
        const {onAdd} = this.props;

        return (
            <form className="bottom-panel d-flex"
                  onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}/>
                <button type="submit"
                        className="btn btn-outline-secondary" onClick={() => onAdd}>
                    Add
                </button>
            </form>
        );

    };
};
