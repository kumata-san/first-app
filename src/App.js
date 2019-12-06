import React from 'react'
import Form from './Form'
import List from './List'


const App = () => {
    const todos = [
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
    return (
        <>
            <Form />
            <List todos={todos} />
        </>
    )
}

export default App