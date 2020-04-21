import app from './app';
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("process env", process.env)
  console.log(`Express server listening on port ${PORT}`);
});
