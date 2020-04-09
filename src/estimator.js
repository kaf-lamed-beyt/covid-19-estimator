const covid19ImpactEstimator = (data) => {
  const inputData = {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71
    },
    periodType: 'days',
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
  };
  return {
    data,
    impact: {
      currentlyInfected: inputData.reportedCases * 10,
      /* Since currently infected people doubles every 3 days
      * estimating the number of infected people 28 days from now
      * where the factor is 9, neglecting the floating point
      */
      infectionsByRequestedTime: ['currentlyInfected'] * 512
    },
    severeImpact: {
      currentlyInfected: inputData.reportedCases * 50, // 50 more people get infected everyday
      infectionsByRequestedTime: ['currentlyInfected'] * 512
    }
  };
};

export default covid19ImpactEstimator;
