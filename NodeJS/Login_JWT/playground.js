const bcrypt = require('bcryptjs');

const password = "Meu Password";

const dbSavedPassword = "$2a$14$GTeuTvp1hI8sXiMVEPuduexnN3ej/aYzB9t/zMiRr9cwjxpBe8VOm"

bcrypt.compareSync(password, dbSavedPassword)

// const salt = bcrypt.genSaltSync(14);
// const cryptPassword = bcrypt.hashSync(password, salt);

console.log(cryptPassword);