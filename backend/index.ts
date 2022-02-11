import app from "./app";

const PORT = process.env.PORT || 5501;

app.listen(PORT, () => {
  console.log('App currently listening on port ' + PORT);
});