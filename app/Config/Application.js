import { LOG_LEVEL } from "axe-api";

export default async () => {
  return {
    port: process.env.APP_PORT,
    logLevel: LOG_LEVEL.INFO,
  };
};
