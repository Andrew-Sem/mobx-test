import React, {FC, useState} from 'react';
import {observer} from "mobx-react-lite";
import todoClass from "../store/todo";

export const Todo: FC = observer(() => {
    const [title, setTitle] = useState("")
    const formHandler = (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (title){
            todoClass.addTodo(title)
            setTitle("")
        }
    }
    return (
        <div>
            <div className={"flex justify-between"}>
                <button className={"hover:opacity-80"} onClick={() => todoClass.fetchTodos()}>Fetch todos</button>
                <form onSubmit={formHandler}>
                    <input className={"bg-zinc-700 rounded-lg px-3 py-1 outline-none"} value={title}
                           onChange={(e) => setTitle(e.currentTarget.value)}/>
                    <button type={"submit"} className={"cursor-pointer ml-2 hover:opacity-80"}>Add todo</button>
                </form>
            </div>
            <div className={"w-[700px] max-w-xl divide-y"}>
                {todoClass.todos.map(todo =>
                    <div key={todo.id} className={"flex p-3 justify-between"}>
                        <div className={"flex"}>
                            <input className={"cursor-pointer"} type={"checkbox"} checked={todo.completed}
                                   onChange={() => todoClass.completeTodo(todo.id)}/>
                            <div className={`ml-2 ${todo.completed && "line-through"}`}>{todo.title}</div>
                        </div>
                        <button className={"cursor-pointer hover:opacity-80"} onClick={() => todoClass.removeTodo(todo.id)}>x</button>
                    </div>)}
            </div>
        </div>
    );
})
