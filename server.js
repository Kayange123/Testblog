const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');
let initial_path = path.join(__dirname, "Public");

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());
app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
});

app.get('/editor', (req, res) => {
        res.sendFile(path.join(initial_path, "editor.html"));
    })
    //  upload link
app.post('/', () => {
    let file = req.files.image;
    let date = new Date();
    //image name
    let imagename = date.getDate() + date.getTime() + file.name;
    // image upload path
    let path = 'Public/upload' + imagename;

    //create upload
    file.mv(path, (err, result) => {
        if (err) {
            throw err;
        } else {
            //image uploads
            res.json('uploads/${imagename}')
        }
    })
})
app.listen("3000", () => {
    console.log('listening...');
});