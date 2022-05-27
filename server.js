const express = require('express.js');
const path = require('path');
let initial_path = path.join(__dirname, "Public");

const app = express();
app.use(express.static(initial_path));
app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
});
app.listen("3000", () => {
    console.log('listening...');
});