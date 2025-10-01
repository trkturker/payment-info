import { useState } from "react"

const App = () => {

  const [baron, setBaron] = useState([
    {id: 1, name: "Mehmet KARAHANLI"},
    {id: 2, name: "Hüseyin KILIÇ"},
    {id: 3, name: "Samuel VANUNU"},
    {id: 4, name: "Ziya YILMAZ"},
    {id: 5, name: "Hüsrev BEKIROGLU"},
  ])

  return (
    <div>
      {baron.map(person => (
        <span>{person.name} <br></br></span>
      ))}
    </div>
  )
}

export default App