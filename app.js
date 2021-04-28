const express = require ('express');
const app = express ();
const path = require ('path');

app.get ('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/views/home.html'))
})

app.listen(3030, () => console.log ('Server up and running on port 3030'));


