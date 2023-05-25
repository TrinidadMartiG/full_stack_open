import React from 'react'

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <h1>{course.name}</h1>
          {course.parts.map((part) => (
            <p key={part.id}>
              {part.name} {part.exercises}
            </p>
          ))}
          <h4>
            Total of{' '}
            {course.parts.reduce(
              (accumulator, currentValue) =>
                accumulator + currentValue.exercises,
              0
            )}{' '}
            exercises
          </h4>
        </div>
      ))}
    </div>
  )
}

export default Course
