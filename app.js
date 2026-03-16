const express = require('express');
const path = require('path');
const hbs = require('hbs')
const app = express();
const port = 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'))





//serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

//default route
const indexRouter = require('./app_server/routes/index');
app.use('/', indexRouter)

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
})