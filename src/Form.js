// useStateを明示的に呼び出す
import React, { useState } from 'react';

// {addTodo: addTodo}は{ addTodo }でも良いしpropsとしても大丈夫
const Form = ({ addTodo: addTodo }) => {
    // 入力値をvalueというstateで管理する
    const [value, setValue] = useState('');


    return (
        // onSubmitで、submit時(ボタン押下時)の処理を書く
        // この記述をそのまま覚えてもいいかも
        // eを書いてJavaScriptの受け皿を用意しておく→e入れたら情報が取れる。eでもなんでも入れておけばおｋ
        <form onSubmit={(e) => {
            // デフォルトの挙動(送信・更新)を止める→追加ボタンおしてもブラウザがクルクルならない→更新されない→おｋ
            e.preventDefault()

            // 追加処理→addTodoにvalueを渡してあげるだけでおｋ
            addTodo(value)
            // 強制的にstateを空にする
            setValue('')

        }}>
            <input
                type="text"
                // onChangeで一文字一文字入力されたものをstateにぶっこんでいる
                onChange={(e) => setValue(e.target.value)}
                // stateとformを相互リンクさせるために記述→書いたものを追加ボタンで消せる
                value={value}
            />
            <button type="submit">追加</button>
        </form>
    )
}

export default Form