export default async ({ app }) => {
  app.get(
    "/api/health",
    (req, res, next) => {
      res.json({
        status: false,
      });
    },
    (req, res) => {
      res.json({
        status: true,
      });
    }
  );
};
