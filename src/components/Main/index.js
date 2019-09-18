import React, { Component } from "react";

import { Container, Title, Form, TextInput, TodoList, TodoListItem } from './styles'

export default class Main extends Component {
    state = {
        todos: [],
        newTodo: ""
    };

    handleKeyDown = e => {
        const { newTodo } = this.state;

        if(e.keyCode === 13 && newTodo) {
            this.setState({
                todos: [
                    ...this.state.todos,
                    {
                        text: newTodo,
                        completed: false
                    }
                ],
                newTodo: ""
            })
        }
    };

    handleToggle = index => {
        const { todos } = this.state;
        const todo = todos[index];

        todo.completed = !todo.completed;

        this.setState({ ...this.state, todos});
    };

    render() {
        return (
            <Container>
                <Title>Tarefas</Title>
                <Form onSubmit={e => e.preventDefault()}>
                    <TextInput 
                        placeholder="O que preciso fazer?"
                        value={this.state.newTodo}
                        onChange={e => 
                            this.setState ({ ...this.state, newTodo: e.target.value})
                        }
                        onKeyDown={this.handleKeyDown}
                    />
                    <TodoList>
                        {this.state.todos.map((todo, index) => (
                            <TodoListItem key={index} item={todo}>
                                <div>
                                    <input
                                        type="checkbox"
                                        onClick={e => this.handleToggle(index)}
                                        checked={todo.completed}
                                    />
                                    <label>{todo.text}</label>
                                </div>
                            </TodoListItem>
                        ))}
                    </TodoList>
                </Form>
            </Container>
        );
    }
}