//Install express server
const express = require('express');
const path = require('path');
const port = 3000;
const baseUrl = `http://localhost:${port}`;
const app = express();

app.use(express.static(path.join(__dirname, './dist'), {index: false}));
app.get('/*', function(req,res) {   
res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || port, () => {
  console.log(`Listening at ${baseUrl}`);
});
