import React, {Component} from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component{
    render(){
        const {todos} = this.props;
        const todoList = todos.map(
            todo => ()
        );

        return(
            <div>
                <TodoItem done>let's study react</TodoItem>
                <TodoItem>let's do component styling</TodoItem>
            </div>
        );
    }
}

export default TodoList;