import React from 'react';
import PropTypes from 'prop-types';

export default function Todo(todo) {
    return (
        <div>
            <span>{todo.seq}</span>
            <span>{todo.text}</span>
            <span>{todo.isComplete}</span>
        </div>
    )
}

Todo.propTypes = {
    id: PropTypes.string.isRequired
}
Todo.defaultProps = {
    text: '할일을 입력 하세요',
    isComplete: false
}
