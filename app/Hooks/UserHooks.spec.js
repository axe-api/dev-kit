import { onBeforeCreate } from "./UserHooks";

describe("onBeforeCreate", () => {
  test("should be able to add timestamps", async () => {
    const formData = {
      name: "Ozzy",
      created_at: null,
    };
    await onBeforeCreate({ formData });
    expect(formData.created_at).not.toBe(null);
  });
});
