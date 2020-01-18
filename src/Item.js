import React, { useState } from 'react';
import styled from 'styled-components'

// propsではなく{ id, text, deleteTodo }で代用
const Item = ({ id, text, deleteTodo }) => {
    const [isDone, setIsDone] = useState(false)
    // stateが変更される(setIsDoneが呼び出される)と、Reactはコンポーネントを再描写する

    const btnStatus = isDone ? '未完了に戻す' : '完了'

    const handleDelete = () => {
        deleteTodo(id)
    }

    // 関数を関数で包まないと無限ループになる
    return (
        <ItemWrapper>
            <p>{`${id}: ${text}`}</p>
            <button onClick={() => setIsDone(!isDone)}>
                {btnStatus}
            </button>
            <button onClick={() => deleteTodo(id)}>
                削除
            </button>
            <button onClick={handleDelete}></button>
        </ItemWrapper>
    )
}

const ItemWrapper = styled.li`
    background-color: gray;
`

export default Item
