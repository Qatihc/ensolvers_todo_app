const express = require('express');
const ApiRouter = require('./routes/index.js');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', ApiRouter);
app.use('/api', express.static('public/logos'));

/* Si no entro a ninguna ruta, va al manejo de errores. */
app.use((err, req, res, next) => {
  if (!err || err.status == 404) {
    return res.status(404).send('Endpoint not found.')
  }

  if (err.status) {
    console.log(err.message)
    return res.status(err.status).send(err.message)
  }

  // No tiene err status code, asumo que es 500
  if (process.env.DEVELOPMENT) return res.status(500).send(err)
  return res.status(500).send('Internal server error.')
})


module.exports = app;
