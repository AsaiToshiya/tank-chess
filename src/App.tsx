import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

type Obstacle = {
  [key: string]: never;
};

const isObstacle = (space: Obstacle | null) =>
  space !== null && Object.keys(space).length === 0;

function App() {
  // prettier-ignore
  const [spaces, setSpaces] = useState([
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, {},   null, null, {},   {},   null, null, null, null, null, null, null, null, null, null],
    [null, {},   null, null, {},   {},   null, null, null, null, null, {},   {},   null, null, null],
    [null, {},   null, null, {},   null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, {},   {},   null, null, null, null, null, null, null],
    [null, null, null, null, null, null, {},   {},   {},   {},   {},   null, null, {},   {},   null],
    [null, null, {},   {},   null, null, null, null, null, null, null, null, null, null, {},   null],
    [null, null, {},   {},   {},   null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, {},   {},   {},   null, null],
    [null, {},   null, null, null, null, null, null, null, null, null, null, {},   {},   null, null],
    [null, {},   {},   null, null, {},   {},   {},   {},   {},   null, null, null, null, null, null],
    [null, null, null, null, null, null, {},   {},   null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, {},   null, null, {},   null],
    [null, null, null, {},   {},   null, null, null, null, null, {},   {},   null, null, {},   null],
    [null, null, null, null, null, null, null, null, null, null, {},   {},   null, null, {},   null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  ])

  return (
    <div>
      {spaces.map((columns, i) => (
        <div className="board-row">
          {columns.map((space, i) => (
            <button className="space">{isObstacle(space) && "X"}</button>
          ))}
        </div>
      ))}
    </div>
  )
}

export default App
