import { useState } from "react"

const App = () => {

  const [isVisible, setIsVisible] = useState(false)

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Göster / Gizle</button>
      {isVisible && <span className="text-3xl">Büyük Resim</span>}
      
    </div>
  )
}

export default App