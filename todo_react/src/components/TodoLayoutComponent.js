import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo';

export default class TodoLayoutComponent extends Component {
    static propTypes = {
        title: PropTypes.string
    }

    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
    }

    render() {
        return (
            <div>
                <div className="header">Todo 시작</div>
                <div className="ttl">
                    Title: {this.props.title}
                </div>
                {/* {
                    this.state.todos && this.state.totos.map(todo => <Todo 
                            {...todo}
                        />
                    )
                } */}
            </div>
        )
    }
};
