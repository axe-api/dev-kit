const isLogged = (req, res, next) => {
  next();
};

const isAdmin = (req, res, next) => {
  next();
};

export { isLogged, isAdmin };
