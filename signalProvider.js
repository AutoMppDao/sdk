async function getSignals(assets) {
  // Simulasi data real-time
  return assets.map(asset => {
    const random = Math.random();

    if (random > 0.6) return { asset, type: "BUY" };
    if (random < 0.4) return { asset, type: "SELL" };

    return { asset, type: "HOLD" };
  });
}

module.exports = { getSignals };
