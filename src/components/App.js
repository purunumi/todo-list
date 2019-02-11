import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
    state = {
        input:'',
        todos: [
            {id: 0, text: 'let\'s study react', done: true},
            {id: 0, text: 'let\'s do component styling', done: true}
        ]
    }

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({
            input:value
        });
    }

    render() {
        const {input, todos} = this.state;
        const {handleChange} = this;

        return (
            <PageTemplate>
                <TodoInput onChange={handleChange} value={input} />
                <TodoList todos={todos} />
            </PageTemplate>
        );
    }
}

export default App;