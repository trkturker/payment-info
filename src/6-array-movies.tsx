import { useState } from "react"

const App = () => {

  const [movies, setBaron] = useState([
    {id: 1, name: "YILDIZLARARASI"},
    {id: 2, name: "Lucy"},
    {id: 3, name: "Interstellar"},
  ])

  return (
    <div>
      {movies.map(movie => (
        <span>{movie.name} <br></br></span>
      ))}
    </div>
  )
}

export default App