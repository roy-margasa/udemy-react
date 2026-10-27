import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function TableResult({ investmentValues }) {
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

      return results;
    },
    [],
  );

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentListRecalculated.map((item, index) => {
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(item.totalInterest)}</td>
              <td>{formatter.format(item.investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
