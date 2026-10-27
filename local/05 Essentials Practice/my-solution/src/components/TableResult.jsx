import { formatter } from '../util/investment.js';

export default function TableResult({ investmentList }) {
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
        {investmentList.map((item, index) => {
          return (
            <tr key={index}>
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
