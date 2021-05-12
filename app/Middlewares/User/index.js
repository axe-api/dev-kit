const isLogged = (req, res, next) => {
  console.log("isLogged");
  next();
};

const isAdmin = (req, res, next) => {
  console.log("isAdmin");
  next();
};

export { isLogged, isAdmin };
