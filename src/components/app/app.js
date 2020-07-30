import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from "../post-add-form";
import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

export default class App extends Component {
    maxId = 100;
    state = {
        data: [
            {label: 'learn React', important: false, id: 1, like: false},
            {label: 'learn Angular', important: false, id: 2, like: false},
            {label: 'learn JS', important: false, id: 3, like: false}
        ],
        term: '',
        filter: 'all'
    };
    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)]
            return {
                data: newArr
            }
        });
    };
    onAddItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++,

        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    };

    onToggleProperty(arr, id, propName) {
        const indx = arr.findIndex((el) => el.id === id);
        const old = arr[indx];
        const newItem = {...old, [propName]: !old[propName]};
        return [...arr.slice(0, indx), newItem, ...arr.slice(indx + 1)];

    };


    onToggleImportant = (id) => {
        this.setState(({data}) => {
            return {
                data: this.onToggleProperty(data, id, 'important')
            }

        });
    };

    onToggleLiked = (id) => {
        this.setState(({data}) => {
            return {
                data: this.onToggleProperty(data, id, 'like')
            }
        });
    };

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        });
    };

    onUpdateSearch = (term) => {
        this.setState({term});
    };

    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items;
        }
    };


    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state
        const liked = data.filter((item) => item.like).length;
        const allPosts = data.length;
        const visiblePost = this.filterPost(this.searchPost(data, term), filter);
        return (
            <AppBlock>
                <AppHeader liked={liked}
                           allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList posts={visiblePost}
                          onDelete={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleLiked={this.onToggleLiked}/>

                <PostAddForm onAdd={this.onAddItem}/>
            </AppBlock>
        )
    };
}
