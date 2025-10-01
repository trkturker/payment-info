import { useState } from 'react'

const App = () => {

  const [arabalar, setArabalar] = useState(["Egea", "Porche", "Lada"])

  const handleArabaSil = (araba : string) => {
    // map: listeleme
    // filter: silme
    setArabalar(arabalar.filter((a) => a !== araba))
  };

  return (
    <div>
      {arabalar.map((araba) => (
        <div>
          <span>{araba}</span>
          <button onClick={() => handleArabaSil(araba)} >🗑</button>
        </div>
      ))}
    </div>
  )
}

export default App