import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
   const [charAllow, setCharAllow] = useState(false)
    const [password, setPassword] = useState("")

    //useRef Hook
const passwordRef = useRef(null)

    const passwordGenerator = useCallback(()=> {
            let pass = ""
            let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

            if (numAllow) str += "0123456789"
            if (charAllow) str += "/.,?><';:{}[]()*&^%$##@!_-" 

            for (let i = 0; i <= length; i++) {
              let char = Math.floor(Math.random() * str.length + 1)
              pass += str.charAt(char)  
            } 

            setPassword(pass)
    }, [length, numAllow, charAllow, setPassword])

    const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0,100)
      window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(() => {
      passwordGenerator()
    }, [length, numAllow, charAllow, passwordGenerator])

  return (
    
             <div className="w-full max-w-md mx-auto shadow-lg rounded-2xl p-6 my-8 
                text-white bg-gray-800 hover:shadow-xl transition-shadow">
  <h1 className="text-2xl font-semibold text-center my-4">Password Generator</h1>

  <div className="flex items-center shadow rounded-lg overflow-hidden mb-6">
    <input
      type="text"
      value={password}
      placeholder='password'
      readOnly 
      ref={passwordRef}
      className="flex-1 outline-none py-3 px-4 bg-gray-900 text-gray-200 text-lg"
    />
    <button
    onClick={copyPasswordToClipboard}
      className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors 
                 px-4 py-3 font-medium text-white"
    >
      Copy
    </button>
  </div>
    <div className='text-sm flex gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={5}
        max={100}
        value={length}
        className='cursor-pointer '
        onChange={(e) => {setLength(e.target.value)}}
         />
         <label>Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
         defaultChecked={numAllow} 
         id="numberInput"
         onChange={(prev) => {
          setNumAllow((prev) => !prev)}} 
          />
          <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
         defaultChecked={charAllow} 
         id="charAllowed"
         onChange={(prev) => {
          setCharAllow((prev) => !prev)}} 
          />
          <label htmlFor="charAllowed">Charectors</label>
      </div>
    </div>
</div>

    
  )
}

export default App
