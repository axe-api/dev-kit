import { Express } from "express";
import ErrorHandler from "./Handlers/ErrorHandler.";

const onBeforeInit = async (app: Express) => {};

const onAfterInit = async (app: Express) => {
  // Set global error handler.
  app.use(ErrorHandler);
};

export { onBeforeInit, onAfterInit };
