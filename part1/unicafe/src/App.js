import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </div>
  )
}

const Statistics = ({ good, neutral, bad, all, positiveFeed, average }) => {
  if (all === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <div>No feedback given</div>
      </>
    )
  }

  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average()} />
          <StatisticLine text="positive" value={`${positiveFeed()}%`} />
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const [totalScore, setTotalScore] = useState(0)

  let positiveFeed = () => {
    if (isNaN((good * 100) / all)) {
      return 0
    } else {
      return (good * 100) / all
    }
  }

  let average = () => {
    if (isNaN(totalScore / all)) {
      return 0
    } else {
      return totalScore / all
    }
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        handleClick={() => {
          let updatedGood = good + 1
          setGood(updatedGood)
          setTotalScore(totalScore + 1)
          console.log('todo', all)
        }}
        text={'good'}
      />
      <Button
        handleClick={() => {
          let updatedNeutral = neutral + 1
          setNeutral(updatedNeutral)
          console.log('todo', all)
        }}
        text={'neutral'}
      />
      <Button
        handleClick={() => {
          let updatedBad = bad + 1
          setBad(updatedBad)
          setTotalScore(totalScore - 1)
          console.log('todo', all)
        }}
        text={'bad'}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        totalScore={totalScore}
        positiveFeed={positiveFeed}
        average={average}
      />
    </div>
  )
}

export default App
