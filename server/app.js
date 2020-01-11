// app.js

// http://codevillage.jp/index.html
// http → プロトコル
// codevillage.jp → ドメイン
// index.html → パス

const express = require('express')
const app = express()

const cors = require('cors')
const bodyParser = require('body-parser')

// corsを実行して3001へどんなポートからでもやり取りを許可できるようにする。
// あまりセキュリティ的には良くないが、現状はオッケー
app.use(cors())
// 送られたjsonをreq.bodyで参照できるようにする
app.use(bodyParser.json())

let todos = [
    {
        id: 1,
        text: '宿題する'
    },
    {
        id: 2,
        text: '洗濯する'
    },
]

// パスと処理を受け取る
// GET http://localhost:3001/
app.get('/', (req, res) => {
    res.send('Hello, World!')
})

// GET http://localhost:3001/todos
// todosをすべて取得
app.get('/todos', (req, res) => {
    res.json(todos)
})

// GET http://localhost:3001/todos/1
// 特定のidのtodoを取得
app.get('/todos/:id', (req, res) => {
    // const id = req.params.id // これは文字列をidにしているから不採用
    const id = Number(req.params.id)
    const todo = todos.find((todo) => {
        return todo.id === id // todoのidと入力されたidが同じ場合trueを返す
    })

    res.json(todo)
})

// POST http://localhost:3000/todos
// 新規todoを追加
// パスはgetと同じにしたほうがいい→問題ないし、シンプル

// IDを作る関数を用意しておく
// todoの中のIDを取ってきて一番大きいものを取得して1を足す。
// できなければ0を入れる
const generateId = () => {
    let maxId = todos.length > 0
        ? Math.max(...todos.map(todo => todo.id))
        :0
    return ++maxId
}

app.post('/todos', (req, res) => {
    const todo = req.body
    todo.id = generateId()
    todos.push(todo)
    res.json(todos)
})

app.delete('/todos/:id', (req, res) => {
    // getの時と同様にNumberで囲わないと文字列として認識されてしまう
    const id = Number(req.params.id)
    // filterのtrueが返ったもの以外を消す。
    todos = todos.filter(todo => todo.id !== id)
    res.json(todos)
})

app.listen(3001, () => {
    console.log('起動!!');
})