import React from 'react';

import Button from "@material-ui/core/Button";

const Form = (props) => {
    const handleSubmit = (e) => {
        //デフォルトの設定の解除
        e.preventDefault()
        // イベント取得
        const title = e.target.title.value
        //todosをコピー
        const newTodos = props.todos.slice()
        //form内容をnewTodoに追加
        newTodos.push({
            text: title
        })
        //setTodosを呼び出す
        props.setTodos(newTodos)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" />
            <Button type="submit">追加</Button>
        </form>
    )
}

export default Form