import { proxy } from "../src/proxy";

describe("proxy", () => {
  it("wraps URL that may required proxy", () => {
    const proxied = proxy("https://flyyer.io/logo.png");
    expect(proxied).toEqual("https://cdn.flyyer.io/proxy/v1?url=https%3A%2F%2Fflyyer.io%2Flogo.png");
  });
  it("wraps URL protocol-relative absolute URLs", () => {
    const proxied = proxy("//google.com");
    expect(proxied).toEqual("https://cdn.flyyer.io/proxy/v1?url=https%3A%2F%2Fgoogle.com");
  });
  it("doesn't wraps local URLs", () => {
    const proxied = proxy("/image.png");
    expect(proxied).toEqual("/image.png");
  });
});
