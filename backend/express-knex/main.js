import express from "express";
import knex from "knex";
const app = express();
const port = 3000;
app.use(express.json());
const knexModel = knex({
  client: "sqlite3",
  connection: {
    filename: "../express-knex/task.sqlite3",
  },
  useNullAsDefault: true,
});

// testing message
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// to get all users from the .sqlite3 file
app.get("/users", async (req, res) => {
  const users = await knexModel("user");
  res.json(users);
});

// to get one user, calling by id number
app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const user = await knexModel("user")
    .where({ id: Number(id) })
    .first();
  res.json(user);
});

// add new user by POST
app.post("/new-user", async (req, res) => {
  const { name, email, phone } = req.body;
  const [id] = await knexModel("user").insert({
    name,
    email,
    phone,
  });
  res.json({
    id,
    name,
    email,
    phone,
  });
});

// updating a user info by(id) with PUT command
app.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  await knexModel("user")
    .where({ id: Number(id) })
    .update({
      name,
      email,
      phone,
    });
  const updateUser = await knexModel("user")
    .where({ id: Number(id) })
    .first();
  res.json(updateUser);
});

// deleting ome user from the table by DELETE
app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const user = await knexModel("user")
    .where({ id: Number(id) })
    .first();
  if (!user) {
    return res.json({ error: "User not found" });
  }
  await knexModel("user")
    .where({ id: Number(id) })
    .del();
  res.json({ message: `User with ID ${id} deleted successfully`, user });
});

app.listen(port, function () {
  console.log(`Server is connect on http://localhost:${port}`);
});
