export default async ({ app }) => {
  app.use((req, res, next) => {
    // Check something
    next();
  });
  app.get("/api/health", (req, res) => {
    res.json({
      status: true,
    });
  });
};
