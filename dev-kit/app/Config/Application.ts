import { LogLevels, IApplicationConfig } from "../../../index";

const config: IApplicationConfig = {
  prefix: "api",
  env: process.env.NODE_ENV || "production",
  port: process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3000,
  logLevel: LogLevels.INFO,
  transaction: [],
  serializers: [],
  supportedLanguages: ["en"],
  defaultLanguage: "en",
};

export default config;
