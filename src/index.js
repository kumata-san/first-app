import ReactDOM from 'react-dom'
import React from 'react'

// 自作コンポーネントは原則相対パスで読みこむこと
import App from './App'

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)