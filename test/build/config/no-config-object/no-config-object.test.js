"use strict";

const { resolve } = require("path");
const { run } = require("../../../utils/test-utils");

describe("empty config", () => {
  it("should work", async () => {
    const { exitCode, stderr, stdout } = await run(__dirname, [
      "-c",
      resolve(__dirname, "webpack.config.js"),
      "--mode",
      "development",
    ]);

    expect(exitCode).toBe(0);
    expect(stderr).toBeFalsy();
    expect(stdout).toBeTruthy();
  });
});
