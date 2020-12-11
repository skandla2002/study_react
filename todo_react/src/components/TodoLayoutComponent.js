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

    componentDidMount(){
        console.log('componentDidMount start!');
        // 최초 render 후 DOM 생성 완료시 API 호출 실행하여 state 값을 지정함
        this.setState({
            todos: [
                {
                    id: 'todo_12345'
                },
                {
                    id: 'todo_12346'
                }
            ]
        })
    }

    render() {
        // state / props 내의 속성을 분리하여 return 전 선언해둠
        const { todos } = this.state;
        const { title } = this.props;
        return (
            <div>
                <div className="header">Todo 시작</div>
                <div className="ttl">
                    <span>Title:</span><span>{title}</span>
                </div>
                {   // 
                    todos && todos.map(
                        (todo, seq) => <Todo
                            {...todo}
                            key={todo.id}
                            seq={seq}
                        />
                    )
                }
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
