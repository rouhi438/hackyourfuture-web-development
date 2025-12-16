//
import express from "express";
const app = express();
const port = 3000;
app.use(express.json());
// --- get ----
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/tag", (req, res) => {
  res.send(`<h1>Main page</h1>
      <h2>Shows main content</h2>`);
});

app.get("/year", (req, res) => {
  const year = new Date();
  const currentYear = year.getFullYear();
  res.send(`The currentYear is ${currentYear}`);
});

// --- post ----

app.post("/post", (req, res) => {
  const data = req.body;
  res.send("received data:", data);
});
app.listen(port, function () {
  console.log(`> Ready on http://localhost:${port}`);
});
