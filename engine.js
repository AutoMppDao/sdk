const { getSignals } = require("../signals/signalProvider");
const { executeStrategy } = require("../strategies/autoStrategy");
const logger = require("../utils/logger");

async function runStrategy(options) {
  logger.info("Starting AutoMPP Engine...");

  const signals = await getSignals(options.assets);

  logger.info("Signals received:", signals);

  const result = await executeStrategy(signals, options);

  logger.info("Execution result:", result);

  return result;
}

module.exports = { runStrategy };
