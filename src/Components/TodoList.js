import React,{ useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])
    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return 
        }
        setTodos(prevState => [...prevState, todo] );
        console.log(todo)
        console.log(todos);
        // console.log(...todos);
    }

    const updateTodo = (todoId, newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId) ? newValue : item));
    }


    const removeTodo  = (todoId) =>{
        console.log(todoId)
        const idRemove = todos.findIndex((todo) => todoId === todo.id);
        const data = [...todos];
        data.splice(idRemove, 1)            
        setTodos(data);
    }

    


    const completeTodo = id =>{
        let updatedTodos = todos.map(todo =>{
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete 
                console.log('asdf')
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    console.log(todos)
    return (
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos}  completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoList
