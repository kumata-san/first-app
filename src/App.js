import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Form from './Form'
import List from './List'


const App = () => {
    // 変わるものにはuseStateしておく
    const [todos, setTodos] = useState([])
    // axiosを使う時はgetの後、サーバーのアドレスを入れる
    // axios
    //     .get('http://localhost:3001/todos')
    //     // getが終わったらthenの後の関数が実行されることになっている。getがresの中に入るということ！
    //     .then((res) => {
    //         // res.dataとすることでbodyの配列だけ取得できる(headerの情報はいらないから)。それをtodosに入れておく。
    //         const todos = res.data
    //         // 取得してきたデータをsetTodosに渡すことで反映させられる
    //         setTodos(todos)
    //     })

    //上記を使うと無限ループになるから次のuseEffectを使うことにしよう！
    useEffect(() => {
        axios
            .get('http://localhost:3001/todos')
            .then((res) => {
                const todos = res.data
                setTodos(todos)
            })
        }
    )

    // 以下追加処理を書いていく
    const addTodo = (value) => {
        // // newTodosは一つ追加したstateをもう一度入れ込んだもの
        // const newTodos = [
        //     // todosは配列だから[]の中に入れるのはおかしい。だから展開しよう！！→「...」を前につければ展開できるよ！
        //     // ...はspread構文っていうんだよ
        //     ...todos,
        //     // 展開したtodosに追加していきましょう！
        //     {
        //         id: Math.random(),
        //         text: value
        //     }
        // ]
        // setTodos(newTodos)
        const newTodo = {
            // idはサーバーで作るからtextというキーにForm.jsで入力したvalueをaddTodoの引数に取って打ち込む
            text: value
        }
        axios
            .post('http://localhost:3001/todos', newTodo)
            .then((res) => {
                const todos = res.data
                setTodos(todos)
            })
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