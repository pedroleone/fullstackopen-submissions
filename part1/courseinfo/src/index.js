import React from 'react'
import ReactDOM from 'react-dom'


const Header  = (props) => {
     return (<h1>{props.course}</h1>);
}

const Part = (props) => {
    return (
        <>
            {props.value}
        </>
    );
}

const Content = (props) => {
    return (
        <p>
            <Part value={props.part.name} />  - <Part value={props.part.exercises} />
        </p>
    );
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.exercises}</p>
    );

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
    <>
      <Header course={course.name} />
      <Content part={course.parts[0]} />
      <Content part={course.parts[1]} />
      <Content part={course.parts[2]} />
      <Total exercises={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))