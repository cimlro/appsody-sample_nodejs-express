const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody! Let's get finished with this tutorial ASAP");
});
 
module.exports.app = app;
