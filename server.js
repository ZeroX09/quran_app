const express = require('express');
const app = express();
const PORT = process.env.PORT||5000;
const path = require('path')

app.use(require('cors')({
    origin:"*"
}))

const apiRouter = require('./Routers/api');
app.use('/q/',express.static(__dirname+'/quran'))
app.use(express.static(path.resolve(__dirname,'public')))

app.use(apiRouter);

app.listen(PORT);