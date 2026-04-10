const { runStrategy } = require("./core/engine");

async function main() {
  await runStrategy({
    strategy: "auto",
    riskLevel: "medium",
    assets: ["BTC", "ETH", "SOL"],
  });
}

main();
