const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const models = require('./models');

const PORT = 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false}));

const init = async() => {
  await models.User.sync()
  await models.Page.sync()
  app.listen(PORT, () => {
    console.log(`Server is listening in port ${PORT}`);
  });

}

init();

app.get("/", (req, res) => {
  res.send("hello world");
})

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })






