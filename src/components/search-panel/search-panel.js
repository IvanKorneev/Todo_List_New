import React, {Component} from 'react';
import './search-panel.css'

export default class SearchPanel extends Component {
    state = {
        term: ''
    };
    onUpdateSearch = (e) => {
        const{onUpdateSearch}=this.props
        const term = e.target.value;
        this.setState({term});
        onUpdateSearch(term);
    }

    render() {
        return (
            <input className="form-control search-input"
                   type="text"
                   placeholder="&"
                   onChange={this.onUpdateSearch}/>
        );
    };
};
