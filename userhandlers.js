const users = [
  {
    id: 1,
    user: "Citizen Kane",
    year: "1941",
    knowscoding: false,
  },
  {
    id: 2,
    user: "Citizen Godfather",
    year: "1972",
    knowscoding: true,
  },
  {
    id: 3,
    user: "Citizen Fiction",
    year: "1994",
    knowscoding: true,
  },
];

const database = require("./database");

const getUsers = (req, res) => {
  database

    .query("select * from users")

    .then(([users]) => {
      res.json(users);
    })

    .catch((err) => {
      console.error(err);

      res.status(404).send("Not Found");
    });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  database

    .query("select * from users where id = ?", [id])

    .then(([users]) => {
      if (users[0] != null) {
        res.json(users[0]);
      } else {
        res.status(404).send("Not Found");
      }
    })

    .catch((err) => {
      console.error(err);

      res.status(404).send("Not Found");
    });
};

module.exports = {
  getUsers,
  getUserById,
};
