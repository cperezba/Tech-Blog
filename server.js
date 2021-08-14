const express = require('express');
const session = require('express-session');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
}))


app.use(require("./controllers/"))

app.listen(PORT, () => 
console.log(`Listening on PORT ${PORT}`));