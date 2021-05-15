import { onBeforeInsert } from "./UserHooks";

describe("onBeforeInsert", () => {
  test("should be able to add timestamps", async () => {
    const formData = {
      name: "Ozzy",
      created_at: null,
    };
    await onBeforeInsert({ formData });
    expect(formData.created_at).not.toBe(null);
  });
});
