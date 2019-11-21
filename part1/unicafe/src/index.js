import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Statistics = ({good, neutral, bad}) => {
    return (
      <div>
      <h1>statistics</h1>
      { good+bad+neutral > 0 ?
      <p>
      <table> 
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />  
        <Statistic text="bad" value={bad} /> 
        <Statistic text="average" value={(good - bad)/(good+neutral+bad)} /> 
        <Statistic text="positive" value={(good/(good+neutral+bad))*100} percent={true} /> 
        </tbody>
      </table>
      </p>
      : "No feedback given" }
      </div>
    );
}

const Statistic = (props) => {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value.toLocaleString(undefined, {maximumFractionDigits: 2})}{props.percent && "%"} </td>
        </tr>
    );
}

const ButtonFeedback = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}>{text}</button>
    );
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral +1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <ButtonFeedback text="good" handleClick={increaseGood} />
        <ButtonFeedback text="neutral" handleClick={increaseNeutral} />
        <ButtonFeedback text="bad" handleClick={increaseBad} />
      </p>
      
      <Statistics good={good}
                  neutral={neutral}
                  bad={bad} 
      />
      
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

