const express = require('express');
const app = express();
const port = 5000 || process.env.PORT;
const connectDB = require('./config/db');
const path = require('path')


app.use(express.json({extended : false}));

connectDB();

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/keeps', require('./routes/api/keeps'));

//Serve static files
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(port, () => console.log(`Server started at ${port}`));