const covid19ImpactEstimator = (data) => {
  const userData = data;
  return {
    data: userData,
    impact: {},
    severeImpact: {}
  };
};

export default covid19ImpactEstimator;
