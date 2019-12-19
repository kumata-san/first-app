import React from 'react'
import Item from './Item'

// { todos, deleteTodos }はpropsで代用可能だよ
const List = ({ todos, deleteTodo}) => {
    return (
        <ul>
            {/* map関数を用いて、データを<Item />に変換する！ */}
            {
                // propsを使わなければ先頭にprops.をつけなくてもおｋ
                todos.map((todo, i) => {
                    return (
                        <Item
                            key={i} // iを入れることで何番目かというのが自動で入ってくる
                            id={todo.id} // todoの中にidが入っているのでこういうふうに書く
                            text={todo.text}
                            deleteTodo={deleteTodo}
                        />
                    )
                })
            }
        </ul>
    )
}

export default List
