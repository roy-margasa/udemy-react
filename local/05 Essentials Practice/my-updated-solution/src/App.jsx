import { useState } from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import TableResult from './components/TableResult.jsx';

function App() {
  const [investmentValues, setInvestmentValues] = useState({
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 5.5,
    duration: 6,
  });

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

      <TableResult investmentValues={investmentValues} />
    </>
  );
}

export default App;
