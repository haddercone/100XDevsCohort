const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json())
try {
    mongoose.connect('process.env.MONGO_URI')
    .then(() => console.log("DB Connected"))
} catch (error) {
    console.log("Error connecting to DB ", error);
}

const User = mongoose.model('Users', {name: String, email: String, password: String});
// TODO: Perform CRUD (CREATE, READ, UPDATE, DELETE) operations

// CREATE
app.post('/signup', async (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const userExists = await User.findOne({email: email});
    if(userExists) {
        return res.status(400).send("User already exists");
    }

    const user = new User({
        name: name,
        email: email,
        password: password,
    })

    try {
        user.save()
        return res.status(200).send("User saved successfully")
    } catch (error) {
        console.log("Error  saving user", error);
    }

})


// READ

// UPDATE

// DELETE
app.listen(3000)