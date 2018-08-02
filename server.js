const express = require('express');
const app = express();

let port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.send("index.html");
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}...`);
});