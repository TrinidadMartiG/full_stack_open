import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  )
}
const Part = ({ part }) => {

  return (
    <>
      <p>
        {part.name} {part.exercises}

      </p>
    </>
  )
}
const Content = ({ parts }) => {
  console.log('partsfromContent', {parts})
  return (
    <>
      {parts.map((part, index) => (
        <Part key={index} part={part} />
        ))}
    </>
  )
}

const Total = ({ parts }) => {
  let totalExercises = parts.reduce((acc, part)=> acc + part.exercises,0)
  console.log(totalExercises)
  return (
    <>
      <p>Number of exercises {totalExercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
