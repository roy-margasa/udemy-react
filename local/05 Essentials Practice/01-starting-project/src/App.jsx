import { useState } from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import TableResult from './components/TableResult.jsx';

import { calculateInvestmentResults } from './util/investment.js';

function App() {
  const [investmentValues, setInvestmentValues] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 1,
  });

  // const [investmentList, setInvestmentList] = useState([]);
  const investmentList = calculateInvestmentResults(investmentValues);
  const investmentListRecalculated = investmentList.reduce(
    (results, item, index) => {
      const totalInterest =
        (results[index - 1]?.totalInterest ?? 0) + item.interest;

      const investedCapital = item.valueEndOfYear - totalInterest;

      results.push({
        ...item,
        totalInterest,
        investedCapital,
      });
      // console.log(results);

      return results;
    },
    [],
  );

  function handleCalculation(field, values) {
    setInvestmentValues((prevValues) => ({
      ...prevValues,
      [field]: values,
    }));
  }

  return (
    <>
      <Header />

      <UserInput
        investmentValues={investmentValues}
        onChangeValue={handleCalculation}
      />

      <TableResult investmentList={investmentListRecalculated} />
    </>
  );
}

export default App;
