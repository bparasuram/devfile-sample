const express = require('express');
const path = require('path');
 
// Creating express object
const app = express();
const publicPath = path.join(__dirname,'public');

app.use(express.static(publicPath));
// Handling GET request
// app.get('/', (req, res) => {
//     res.send('A simple Node App is '
//         + 'running on this server')
//     res.end()
// })
 
// Port Number
const PORT = process.env.PORT ||5000;
 
// Server Setup
app.listen(PORT,console.log('Server started on port ${PORT}'));