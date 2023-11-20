
exports.runSteps = async (steps, context = {}) => {
  const result = [];
  for (let i = 0; i < steps.length; i++) {
    result[i] = await steps[i](context);
  }
  return result;
};
