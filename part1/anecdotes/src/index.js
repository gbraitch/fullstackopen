import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Display = ({points, anecdotes}) => {
  let most = -1
  let loc = 0

  points.forEach((element, index) => {
    if (element > most) {
      most = element
      loc = index
    }
  });

  return (
    <div>
      {anecdotes[loc]}
      <br/>has {most} votes
    </div>
  )

}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0])

  const newAnecdote = () => {
    setSelected(Math.round(Math.random()*5))
  }

  const vote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <div>has {points[selected]} votes </div>
      <Button handleClick = {() => vote()} text="vote" />
      <Button handleClick={() => newAnecdote()} text="next anecdote"/>
      <h1>Anecdote with most votes</h1>
      <Display points={points} anecdotes={props.anecdotes}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)