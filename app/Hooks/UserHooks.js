const onBeforeInsert = async ({ formData }) => {
  formData.created_at = new Date();
  formData.updated_at = new Date();
};

export { onBeforeInsert };
