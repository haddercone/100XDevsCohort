const express = require('express');
const z = require('zod')

const app = express();
app.use(express.json());

const schema = z.array(z.number())
app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys)
  if(!response.success){
    res.status(411).json({
        msg: "Invalid is invalid"
    })
  } else {
      res.send({
        response
      })
  }
});


// global catches

app.use(function (err, req, res, next) {
    res.json({
        msg: "Something is wrong with your server. Please try again"
    })
})
app.listen(3000)