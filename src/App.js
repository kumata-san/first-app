import React, { useState } from 'react'
import Form from './Form'
import List from './List'


const App = () => {
    // 変わるものにはuseStateしておく
    const [todos, setTodos] = useState([])

    // 以下追加処理を書いていく
    const addTodo = (value) => {
        // newTodosは一つ追加したstateをもう一度入れ込んだもの
        const newTodos = [
            // todosは配列だから[]の中に入れるのはおかしい。だから展開しよう！！→「...」を前につければ展開できるよ！
            // ...はspread構文っていうんだよ
            ...todos,
            // 展開したtodosに追加していきましょう！
            {
                id: Math.random(),
                text: value
            }
        ]
        setTodos(newTodos)
    }

    // 消した状態のTodos→newTodosを作って全部上書きする
    // 引っ張ってきたidを使えるようにするためにidを引数に入れておく
    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => id !== todo.id)
        setTodos(newTodos)
    }

    return (
        <>
            <Form addTodo={addTodo} />
            {/* todosの中にはidとtextが入っているよ */}
            <List todos={todos} deleteTodo={deleteTodo} />
        </>
    )
}

export default App