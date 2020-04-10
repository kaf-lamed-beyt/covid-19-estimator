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
  // computation objects storage.
  const impact = {};
  const severeImpact = {};

  impact.currentlyInfected = inputData.reportedCases * 10;
  severeImpact.currentlyInfected = inputData.reportedCases * 50;
  // since the number of currently infected people doubles every 3 days.
  impact.infectionsByRequestedTime = impact.currentlyInfected * 512;
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * 512;
  // // Normalizing the duration input to 'days'
  // if (inputData.periodType === 'weeks') {
  //   inputData.timeToElapse = 7;
  // } else if (inputData.periodType === 'months') {
  //   inputData.timeToElapse = 30;
  // }
  // output data-structure
  return {
    data,
    impact,
    severeImpact
  };
};


export default covid19ImpactEstimator;
