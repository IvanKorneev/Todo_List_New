import React, {Component} from 'react';
import './post-status-filter.css'


export default class PostStatusFilter extends Component {

    state = {
        buttons: [
            {name: 'all', label: 'all'},
            {name: 'like', label: 'likes'}
        ]
    }


    render() {
        const {buttons} = this.state
        const {filter,onFilterSelect} = this.props

        const btn = buttons.map(({name, label}) => {
            const active = filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button key={name}
                        type='button'
                        className={`btn ${clazz}`}
                onClick={() => onFilterSelect(name)}>{label}</button>
            )
        });

        return (
            <div className='btn-group'>
                {btn}
            </div>

        )
    }
}
