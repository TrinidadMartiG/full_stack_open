import { useState } from 'react'

const MostVoted = ({ points, anecdotes }) => {
  let pointsValues = [...points]
  let mostVoted = Math.max(...pointsValues)
  let index = pointsValues.indexOf(mostVoted)
  // console.log('mostvoted',pointsValues)
  // console.log('max',mostVoted)
  // console.log('i',index)
  return (
    <>
      {mostVoted !== 0 ? (
        <>
          <div>{anecdotes[index]}</div>
          <div> Has {mostVoted} votes</div>
        </>
      ) : null}
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    let newValue = Math.floor(Math.random() * (max - min + 1)) + min
    setSelected(newValue)
  }

  function addVote() {
    const newVotes = [...points]
    newVotes[selected] += 1
    setPoints(newVotes)
    setVotes(votes + 1)
    console.log(newVotes)
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>Has {points[selected]} votes</div>
      <button onClick={() => addVote()}>Vote</button>
      <button onClick={() => getRandomIntInclusive(0, anecdotes.length - 1)}>
        Next anecdote
      </button>
      <h1>Anecdote with most votes</h1>
      <MostVoted points={points} anecdotes={anecdotes} />
    </>
  )
}

export default App
