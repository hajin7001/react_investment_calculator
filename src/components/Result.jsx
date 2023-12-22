import {calculateInvestmentResults, formatter} from "../util/investment.js"
import { useState } from "react"
// 이 function을 이용해서 계산을 하고 출력을 할거야. 
// 이 function은 object으로 받아서 object으로 내보낸다. 

export default function Result({input}){
  const results_data = calculateInvestmentResults(input);
  const initialInvestment = 
    results_data[0].valueEndOfYear 
    - results_data[0].interest
    - results_data[0].annualInvestment;

  return(
    <table id="result">
      <thead>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest(Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </thead>
      <tbody>
        {results_data.map((yearData) => {
          const totalInterest = 
            yearData.valueEndOfYear - yearData.annualInvestment * yearData.year -  initialInvestment;
          
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
          return(
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}