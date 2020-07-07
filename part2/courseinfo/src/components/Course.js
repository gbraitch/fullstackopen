import React from 'react';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const total = course.parts.reduce((sum,part) => ({exercises: sum.exercises + part.exercises}))

  return(
    <p><b>total of {total.exercises} exercises</b></p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = ({ course }) => {
  const temp = [...course.parts]
  const parts = temp.map(part => <Part key={part.exercises} part={part}/>)
  return (
    <div>
      {parts}
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default Course