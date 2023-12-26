const express = require('express');
const app = express();
const cors=require('cors');


app.use=express(cors());


// Define a route for /api/products
app.get('/', (req, res) => {
  // Handle the request and send a response
  res.send('hello herre');
});
app.get('/service', (req, res) => {
    // Handle the request and send a response
    res.send('apidata');
  });



// Start the server
const PORT = process.env.PORT || 3001;

const apidata=require("./db.jsons")
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
