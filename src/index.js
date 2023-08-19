const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Express is on')
})

app.listen(PORT, () => console.log('App is running on port 5000'))