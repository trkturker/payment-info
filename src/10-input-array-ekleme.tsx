import { useState } from "react"

const App = () => {

  const [iller, setIller] = useState<string[]>([
    "Istanbul",
    "Izmir",
    "Ankara"
  ])

  const [il, setIl] = useState<string>("")

  const handleIlEkle = () => {
    setIller([...iller, il])
  }

  return (
    <div>
      <input className="p-4 block border-2" value={il} onChange={(e) => setIl(e.target.value)} />
      <button className="block p-4 my-4 rounded bg-blue-500" onClick={() => handleIlEkle()}>Ekle</button>
      {iller.map(il => (
        <div>

          <span>{il}</span> <br></br>
        </div>
      ))}
    </div>
  )
}

export default App