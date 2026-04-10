function executeStrategy(signals, options) {
  const { riskLevel } = options;

  return signals.map(signal => {
    if (signal.type === "BUY" && riskLevel !== "low") {
      return { asset: signal.asset, action: "BUY" };
    }

    if (signal.type === "SELL") {
      return { asset: signal.asset, action: "SELL" };
    }

    return { asset: signal.asset, action: "HOLD" };
  });
}

module.exports = { executeStrategy };
