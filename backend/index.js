const app = require('./app');
const PORT = process.env.PORT || 5500;

const server = app.listen(PORT, () => {
  console.log('App currently listening on port ' + PORT);
});