const express = require('express');
const app = express();
const PORT = process.env.PORT||5000;


app.use(require('cors')({
    origin:"*"
}))

const apiRouter = require('./Routers/api');

app.use('/',apiRouter);
app.use('/q/',express.static(__dirname+'/quran'))
app.use(express.static(__dirname+'/public'))

app.listen(PORT);