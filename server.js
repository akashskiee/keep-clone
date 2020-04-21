const express = require('express');
const app = express();
const port = 5000 || process.env.PORT;
const connectDB = require('./config/db');


app.use(express.json({extended : false}));

connectDB();

app.get('/', (req, res) => res.send("Hello World"));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/keeps', require('./routes/api/keeps'));


app.listen(port, () => console.log(`Server started at ${port}`));