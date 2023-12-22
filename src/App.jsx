import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";


function App() {
  const [userInput, setUserInput] = useState(
    {
      initialInvestment: 1000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10}
  )
  
  const inputIsValid = userInput.duration >= 1;

  function handleChangeInput(inputIdentifier, newValue){
    setUserInput(prevUserInput => {
      return{
        ...prevUserInput,
        [inputIdentifier]:+newValue
      };
    });
  }
  
  
  return (
    <div>
      <Header/>
      <UserInput onChange={handleChangeInput} userInput={userInput}/>
      {!inputIsValid && <p className="center">Please Enter Valid Input Data</p>}
      {inputIsValid && <Result input={userInput}/>}
    </div>
  );
}

export default App
