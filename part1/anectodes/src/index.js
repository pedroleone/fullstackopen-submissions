import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const getRandomIndexFromArray = (arr) => Math.floor(Math.random()*arr.length)


const MostVoted = (props) => {
    const selectMostVoted = (votes) => {
        console.log('New vote!')
        let position = 0
        let votesReceived = 0
        votes.forEach((value,index) => {
            if (value > votesReceived) {
                position = index
                votesReceived = value
            }
        })
        return position 
    }

    return (
        <div>
            <h1>Anecdote with most votes</h1>
            {props.votes.reduce((acum,curval) => acum = acum+curval) > 0 ? 

                <p>{props.anecdotes[selectMostVoted(props.votes)]} <br/>
                has {props.votes[selectMostVoted(props.votes)]} votes</p>
            : 
                <p>No votes yet</p>}
        </div>       
    )
}

const App = (props) => {
  
  const [selected, setSelected] = useState(getRandomIndexFromArray(props.anecdotes))
  const [votes, setVotes] = useState(Array.from(props.anecdotes, () => 0))
  
  
  const handleRandomize = () => setSelected(getRandomIndexFromArray(props.anecdotes))
  const handleVote = (selected) => {
      let points = [...votes];
      points[selected]++
      setVotes(points)
    }

  return (
    <div>
       <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]} <br />
      has {votes[selected] } votes <br />
      <button onClick={handleRandomize}>next anecdote</button>
      <button onClick={() => handleVote(selected)}>vote</button>
      <MostVoted anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often', 
  'Adding manpower to a late software project makes it later!',
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