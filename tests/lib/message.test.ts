import { getMessage } from "../../src";

describe("message", () => {
  test("default option", async () => {
    const message = getMessage("AAA", {
      prefix: "Hello,",
      suffix: "",
      quote: false,
    });

    expect(message).toEqual("Hello,AAA");
  });
});