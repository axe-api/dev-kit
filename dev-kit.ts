import logger from "node-color-log";
import dotenv from "dotenv";
import path from "path";
import { Server } from "./index";

logger.bgColor("yellow").color("black").log("Axe API dev-kit (1.0.0)");
logger
  .color("blue")
  .log("Docs: https://axe-api.com/contribution/fundamentals.html \n");

dotenv.config();

const server = new Server();
server.start(path.join(__dirname, "dev-kit"));
