import { Hono } from 'hono'

const app = new Hono()


app.get('/', (c) => {
  return c.json({
   message: "Home page"
  })
})

app.post('/', async (c) => {
  const body = await c.req.json();
  console.log(body);

  return c.text('Hello Hono!')
})

export default app
