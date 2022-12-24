import dotenv from "dotenv";
import { Server } from "axe-api";

// Sentry configuration
dotenv.config();

const server = new Server();
server.start(__dirname);
