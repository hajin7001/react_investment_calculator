export default function UserInput({onChange, userInput}){
  
  // handleChange에 값을 string으로 넣은 점! 근데 실제 object은 그렇지 않은점!
  return(
    <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input type="number" required 
            value={userInput.initialInvestment}
            onChange={(event)=>onChange('initialInvestment', event.target.value)}/>
          </p>
          <p>
          <label>Annual Investment</label>
          <input type="number" required 
            value={userInput.annualInvestment}
            onChange={(event)=>onChange('annualInvestment', event.target.value)}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Result</label>
            <input type="number" required
            value={userInput.expectedResult}
            onChange={(event)=>onChange('expectedReturn', event.target.value)}/>
          </p>
          <p>
            <label>Duration</label>
            <input type="number" required
            value={userInput.duration}
            onChange={(event)=>onChange('duration', event.target.value)}/>
          </p>
        </div>
          
      </section>
    
  );
}