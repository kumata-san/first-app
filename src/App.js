import React from 'react'
import Form from './Form'
import List from './List'


const App = () => {
    const [todos, setTodos] = React.useState(
        [
            {
                text: '宿題をする'
            },
            {
                text: '洗濯をする'
            },
            {
                text: '確定申告をする'
            }
        ]
    )
    const handleDelete = (text) => {
        //todosをコピーする
        const newTodos = todos.slice()
        //todosから削除するtodoを発見する
        for (let i = 0; i < newTodos.length; i++) {
            switch (newTodos[i].text) {
                case text:
                    //todosから削除する => text同じだと複数消えてしまう。=> 一意
                    newTodos.splice(i, 1)
            }
        }
        // setTodosを呼び出す 
        setTodos(newTodos)
    }
    return (
        <>
            <Form todos={todos} setTodos={setTodos} />
            <List todos={todos} handleDelete={handleDelete} />
        </>
    )
}

export default App