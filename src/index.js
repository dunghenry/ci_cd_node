const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 4000;
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const colors = require('colors');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.get("/", (req, res) => {
    return res.send("Hello World!");
})
app.listen(port, () => console.log(colors.green(`Server listening on http://localhost:${port}`)));
module.exports = app;