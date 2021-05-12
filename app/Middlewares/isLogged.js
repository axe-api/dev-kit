export default async (req, res, next) => {
  console.log("isLogged");
  next();
};
