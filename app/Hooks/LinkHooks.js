import { v4 as uuidv4 } from "uuid";

const onBeforeInsert = async ({ formData }) => {
  formData.uuid = uuidv4();
};

export { onBeforeInsert };
