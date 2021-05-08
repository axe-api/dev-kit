export default ({ app, ioc, config }) => {
  ioc.singleton("Mailer", () => {
    return new Mailer();
  });
};
