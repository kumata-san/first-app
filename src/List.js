import React from 'react'
import Item from './Item'

const List = (props) => {
    console.log(props.todos)
    return (
        <ol>
            {/* map関数を用いて、データを<Item />に変換する！ */}
            {
                props.todos.map((todo) => {
                    return (
                        <Item text={todo.text} handleDelete={props.handleDelete} />
                    )
                })
            }
        </ol>        
    )
}

export default List