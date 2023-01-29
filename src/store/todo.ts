import {makeAutoObservable} from "mobx";

interface ITodo {
    id: number
    title: string
    completed: boolean
}

class Todo {
    todos: Array<ITodo> = [
        {id: 123123123, title: "Go shop", completed: false},
        {id: 3123123, title: "Buy groceries", completed: false},
        {id: 3012040124, title: "Go home", completed: false}
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(title: string) {
        this.todos.push({id: Math.random(), title, completed: false})
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo(id: number) {
        this.todos.forEach(todo => todo.id === id ? todo.completed = !todo.completed : todo)

    }

    fetchTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                this.todos = [...this.todos, ...json]
            })
    }
}

export default new Todo()