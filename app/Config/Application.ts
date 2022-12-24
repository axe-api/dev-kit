import { LogLevels, IApplicationConfig } from "axe-api";

const config: IApplicationConfig = {
  prefix: "api",
  env: process.env.NODE_ENV || "production",
  port: process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 5000,
  logLevel: LogLevels.INFO,
  transaction: [],
  serializers: [],
};

export default config;