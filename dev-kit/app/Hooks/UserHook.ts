import { IoCService, IHookParameter } from "../../../index";

const onBeforeInsert = async ({ formData }: IHookParameter) => {
  // const mailer = await IoCService.use("Mailer");
  // formData.created_at = new Date();
};

export { onBeforeInsert };
