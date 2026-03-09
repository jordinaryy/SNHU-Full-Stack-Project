const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

//default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log('server running at http://localhostL${port}');
})