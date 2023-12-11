const express = require('express');
const app = express();
const port =  3000

app.use(express.json());
const TODOS = [];

app.get('/', (req, res) =>{
    res.send("Welcome")
})
app.post('/addtodo', (req, res) => {
    const idExist = TODOS.find(todo => todo.id === req.body.id);
    if(idExist) {
        res.send("Cannot add todo with id: " + req.body.id);
    } else {
    const data = req.body;
    TODOS.push(data);
    res.send("Todo Added!");
    }
})

app.put('/update', (req, res) => {
    const {id, data} = req.body;
    const todoExist = TODOS.find(todo => todo.id === id);
    if(todoExist){
        todoExist.data = data;
        res.send("Todo Updated!");
    } else {
        res.send("No todo found! with id " + id);
    }
})
app.delete('/delete', (req, res) =>{
    const todoExist = TODOS.find(todo => todo.id === req.body.id);
    if(todoExist){
        TODOS.splice(TODOS.indexOf(todoExist), 1);
        res.send("Todo Removed!");
    } else {
        res.status(404).send("No todo Exists!");
    }
})


app.get('/todos', (req, res) => {
    res.status(200).json(TODOS);
})
//  create a todo app that lets user to store todos on the server
app.listen(port, () => console.log("Server running on port 3000"))




