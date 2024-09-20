const express = require('express');
const cors =  require('cors');
var bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json());
const list = [
        {
            id: 1,
            title: "First blog",
            content: "This is my first blog post",
        },
        {
            id: 2,
            title: "Second blog",
            content: "This is my second blog post",
        },
]

app.get('/', (req, res) => { 
    console.log("GET request received");
    console.log(list);
    res.json(list)
    
 });

app.post('/', (req, res) => {
    console.log(req.body);
    list.push(req.body);
    res.send("Data received");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});