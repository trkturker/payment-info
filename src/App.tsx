import { useState } from 'react'
const App = () => {

  const [metin, setMetin] = useState("")
  const [kartNo, setKartNo] = useState("")
  const [seciliAy, setSeciliAy] = useState("")


  const handleName = (event) => {
    setMetin(event.target.value);
    // console.log("event", event);
    // console.log("event.target", event.target);
    // console.log("event.target.value", event.target.value);

  }
  const handleKartNo = (event) => {
    setKartNo(event.target.value);
    // console.log("event", event);
    // console.log("event.target", event.target);
    // console.log("event.target.value", event.target.value);

  }

  return (
    <div>
      <div className='border border-1 border-gray-300 shadow-xs p-4 m-20 rounded '>
        <div className=''>Ödeme Bilgileri</div>
        <div>Kredi kartı bilgilerini giriniz</div>
        <br></br>

        <div>Kart Üzerindeki İsim</div>
        <div>
          <input  className='border border-1 border-gray-300 p-2 m-2 rounded' type='text' value={metin} placeholder='Ahmet Yılmaz' onChange={(event) => handleName(event)} />
        </div>
        <div>Kart Üzerindeki İsim</div>
        <div>
          <input className='border border-1 border-gray-300 p-2 m-2 rounded' type='text' value={kartNo} placeholder='0000 0000 0000 0000' onChange={(event) => handleKartNo(event)} />
        </div>

        <div>

          <select className='border border-1 p-2 m-2 rounded' value={seciliAy} onChange={e => setSeciliAy(e.target.value)}>
            <option value="Kadin" id="">Kadin</option>
            <option value="Diger" id="">Diger</option>
          </select>
        </div>

      </div>


      {/* {metin} */}
    </div>
  )
}

export default App