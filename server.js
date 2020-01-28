//Install express server
const express = require('express');
const path = require('path');
const port = 3000;
const baseUrl = `http://localhost:${port}`;
const app = express();

app.set('view engine', 'html');
app.set('views', './dist');
app.use(express.static(path.join(__dirname, './dist'), {index: false}));
//app.use('/', express.static('./', {index: false}));
app.get('/*', (req, res) => {
  res.render('index', {
    req,
    res
  });
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || port, () => {
  console.log(`Listening at ${baseUrl}`);
});
