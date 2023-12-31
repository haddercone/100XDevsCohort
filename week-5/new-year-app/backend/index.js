// write basic express voilerplate
// write express.json middleware

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    return res.status(411).json({ message: "Invalid payload" });
  }
  // put it in mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({ msg: "Todo created!" });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  return res.json(todos);
});

app.put("/completed", async function (req, res) {
  const completedPayload = req.body;
  const parsedPayload = updateTodo.safeParse(completedPayload);
  if (!parsedPayload.success) {
    return res.status(411).json({ message: "Invalid payload" });
  }

  await todo.findByIdAndUpdate(
    completedPayload.id,
    { $set: { completed: true } },
    { new: true }
  );

  return res.json({ msg: "Todo updated" });
});

const Port = 3000;

app.listen(Port, () => console.log("Server running at port", Port));
