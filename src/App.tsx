import { useState } from 'react'


const App = () => {

  const [metin, setMetin] = useState("")
  const [kartNo, setKartNo] = useState("")
  const [seciliAy, setSeciliAy] = useState("")
  const [seciliYil, setSeciliYil] = useState("")
  const [code, setCode] = useState("")

  const handleClick = () => {
    alert(` \n isim: ${metin} \n kart no: ${kartNo} \n ay: ${seciliAy} \n yıl: ${seciliYil} \n güvenlik kodu: ${code}`);
  }

  return (
    <div className='grid grid-cols-1 items-center h-screen font-sans'>
      <div className='border  max-w-sm border-gray-300 shadow-xs px-4 py-4 m-20 rounded mx-auto'>
        <div className='font-bold text-xl px-2 mt-2'>Ödeme Bilgileri</div>
        <div className='font-base text-sm text-slate-500 px-2 mb-6'>Kredi kartı bilgilerini giriniz</div>
        <div className='font-semibold text-sm px-2'>Kart Üzerindeki İsim</div>
        <div>
          <input className='border w-84 border-gray-300 p-2 px-4 m-2 rounded' type='text' value={metin} placeholder='Ahmet Yılmaz' onChange={(e) => setMetin(e.target.value)} />
        </div>
        <div className='font-semibold text-sm px-2'>Kart Numarası</div>
        <div>
          <input className='border  w-84 border-gray-300 p-2 px-4 m-2 rounded' type='text' value={kartNo} placeholder='0000 0000 0000 0000' onChange={(e) => setKartNo(e.target.value)} />
        </div>

        <div className='flex'>

          <label className='flex-1 font-semibold text-sm flex flex-col' >
            <span className='mx-2'>Ay</span>
            <select className='flex flex-1 border  py-2 px-4 m-2 rounded border-gray-300' value={seciliAy} onChange={e => setSeciliAy(e.target.value)}>
              <option value="AA" id="">AA</option>
              <option value="Ocak" id="">1</option>
              <option value="Subat" id="">2</option>
              <option value="Mart" id="">3</option>
              <option value="Nisan" id="">4</option>
              <option value="Mayis" id="">5</option>
              <option value="Haziran" id="">6</option>
              <option value="Temmuz" id="">7</option>
              <option value="Agustos" id="">8</option>
              <option value="Eylul" id="">9</option>
              <option value="Ekim" id="">10</option>
              <option value="Kasim" id="">11</option>
              <option value="Aralik" id="">12</option>
            </select>
          </label>
          <label className='flex-1 font-semibold text-sm flex flex-col' >
            <span className='mx-2'>Yıl</span>
            <select className='flex flex-1 border  py-2 px-4 m-2 rounded border-gray-300' value={seciliYil} onChange={e => setSeciliYil(e.target.value)}>
              <option value="YY" id="">YY</option>
              <option value="2025" id="">2025</option>
              <option value="2026" id="">2026</option>
              <option value="2027" id="">2027</option>
              <option value="2028" id="">2028</option>
              <option value="2029" id="">2029</option>
              <option value="2030" id="">2030</option>
              <option value="2031" id="">2031</option>
              <option value="2032" id="">2032</option>
              <option value="2033" id="">2033</option>
              <option value="2034" id="">2034</option>
            </select>
          </label>
          <label className='flex-1 font-semibold text-sm flex flex-col' >
            <span className='mx-2'>Güvenlik Kodu</span>
            <input className='flex flex-1 border w-30 py-2 px-4 m-2 rounded border-gray-300' type='text' value={code} placeholder='123' onChange={(e) => setCode(e.target.value)} />
          </label>

        </div>
        <button onClick={handleClick} className="bg-black cursor-pointer w-84 text-white font-semibold py-2 px-4 rounded mx-2 mt-4">Şimdi Öde</button>

      </div>


      {/* {metin} */}
    </div>
  )
}

export default App