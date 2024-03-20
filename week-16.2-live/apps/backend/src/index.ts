import express, {Request, Response} from 'express'

const app = express()

app.use(express.json())

app.get("/", (req: Request, res: Response) =>{
    res.json({"message": "Hello there"});
})

app.listen(3003, () => console.log("server running at port 30003"));