const { runStrategy } = require("../src/core/engine");

test("runStrategy should return results", async () => {
  const result = await runStrategy({
    strategy: "auto",
    riskLevel: "medium",
    assets: ["BTC"]
  });

  expect(result).toBeDefined();
});
