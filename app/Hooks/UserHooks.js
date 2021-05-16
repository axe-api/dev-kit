import { IoC } from "axe-api";

const onBeforeInsert = async ({ formData }) => {
  const mailer = await IoC.use("Mailer");
  formData.created_at = new Date();
};

export { onBeforeInsert };
