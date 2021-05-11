import { ApiError } from "axe-api";

const onBeforeCreate = async ({ formData }) => {
  formData.created_at = new Date();
  formData.updated_at = new Date();
  // throw new ApiError(406, "Olmadı beybi!");
};

const x = {
  onBeforeAll: null,
  onAfterAll: null,

  paginate: {
    onBefore: null,
    onBeforeCreate: null,
    onAfterCreate: null,
    onAfter: null,
  },
};

export { onBeforeCreate };
