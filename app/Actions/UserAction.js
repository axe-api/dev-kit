const onAfterSave = async ({ ioc }) => {
  const Mail = ioc.get("Mailer");
  await Mail.send("user@mail.com", "Welcome!");
};

export { onAfterSave };
