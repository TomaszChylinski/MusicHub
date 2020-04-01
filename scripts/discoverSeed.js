const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/musichub"
);

const discoverSeed = [
  {
    firstName: "Aaron",
    lastName: "Wilson",
    userName: "WillyAyo",
    email: "aaaron.w@yahoo.com",
    password: "12345",
    friendStatus: false,
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    firstName: "Mace",
    lastName: "Marut",
    userName: "mace-money",
    email: "mace@yahoo.com",
    password: "12345",
    friendStatus: false,
    image:
      "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    firstName: "Adrian",
    lastName: "Zygo",
    userName: "Adrain",
    email: "adrain@yahoo.com",
    password: "12345",
    friendStatus: false,
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    firstName: "Jeff",
    lastName: "Miller",
    userName: "JeffM",
    email: "jeffw@yahoo.com",
    password: "12345",
    friendStatus: false,
    image:
      "https://images.pexels.com/photos/1427741/pexels-photo-1427741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    firstName: "Nicole",
    lastName: "White",
    userName: "Nicole",
    email: "nicole@yahoo.com",
    password: "12345",
    friendStatus: false,
    image:
      "https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    firstName: "Jessica",
    lastName: "Brown",
    userName: "Jess",
    email: "jessica@yahoo.com",
    password: "12345",
    friendStatus: false,
    image:
      "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    firstName: "Richard",
    lastName: "Gray",
    userName: "Richard",
    email: "richard@yahoo.com",
    password: "12345",
    friendStatus: false,
    image:
      "https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    firstName: "James",
    lastName: "Zimmer",
    userName: "ZimJ",
    email: "james@yahoo.com",
    password: "12345",
    friendStatus: false,
    image:
      "https://images.pexels.com/photos/793253/pexels-photo-793253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    firstName: "Janet",
    lastName: "Benties",
    userName: "JBenito",
    email: "janet@yahoo.com",
    password: "12345",
    friendStatus: false,
    image:
      "https://images.pexels.com/photos/1449791/pexels-photo-1449791.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    firstName: "Ricardo",
    lastName: "Yu",
    userName: "YUR",
    email: "ricardo@yahoo.com",
    password: "12345",
    friendStatus: false,
    image:
      "https://images.pexels.com/photos/377058/pexels-photo-377058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    firstName: "Michael",
    lastName: "Aubrey",
    userName: "AubRey",
    email: "aubrey@yahoo.com",
    password: "12345",
    friendStatus: false,
    image:
      "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    firstName: "Maggy",
    lastName: "Wang",
    userName: "Maggy",
    email: "maggy@yahoo.com",
    password: "12345",
    friendStatus: false,
    image:
      "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    firstName: "Karol",
    lastName: "Silver",
    userName: "SilverKarol",
    email: "karol@yahoo.com",
    password: "12345",
    friendStatus: false,
    image:
      "https://images.pexels.com/photos/1125028/pexels-photo-1125028.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    firstName: "Tamara",
    lastName: "Penny",
    userName: "PennyT",
    email: "tamara@yahoo.com",
    password: "12345",
    friendStatus: false,
    image:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
];

db.users
  .remove({})
  .then(() => db.users.insertMany(discoverSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
