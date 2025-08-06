import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import parrot from './assets/parrot.png'
import headerBg from './assets/background.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='bg-cover bg-no-repeat flex items-center justify-center gap-7 h-[120px] py-5' style={{backgroundImage: `url(${headerBg})`}}>
          <img src={parrot} className='w-[60px]' alt="Image of a parrot with rainbow skin smiling" />
          <div>
              <h1 className='text-[#32CD32] text-[2.714rem] font-shoulders'>PollyGlot</h1>
              <p className='text-white mt-[-5px] font-bold text-[12px] tracking-wider'>Perfect Translation Every Time</p>
          </div>
      </header>

      <main className='flex items-center justify-center mt-[10px] w-full h-[900px]'>
        <div className='flex flex-col items-center border-[4px] border-[#252F42] rounded-[15px] w-[365px] h-[505px] mt-[-300px] py-5 px-5'>
            <h1 className='text-[#035A9D] text-[1.25rem] font-bold'>Text to translate👇</h1>
            <textarea
            className='w-[100%] h-[118px] bg-[#EFF0F4] px-3 py-3 mt-5 rounded-[8px] resize-none' 
            type="text" 
            name="text" 
            id="translationTextInput"
            placeholder='How are you?' 
            ></textarea>
            <h1 className='text-[#035A9D] font-bold text-[1.25rem] mt-5'>Select languages👇</h1>
            <form className='mt-5 flex flex-col self-start text-start px-5'>
              
              <label className='font-bold'>
                <input className='mr-2 ' type="radio" name='languages' value='french' />
                French
              </label>

              
              <label className='font-bold'>
                <input className='mr-2' type="radio" name='languages' value='spanish' />
                Spanish 
              </label>

              <label className='font-bold'>
                <input className='mr-2' type="radio" name='languages' value='japanese' />
                Japanese
              </label>
            </form> 
            <button className='bg-[#035A9D] w-[100%] py-2 text-white font-bold text-2xl mt-5 flex items-center justify-center rounded-[6px] cursor-pointer'>Translate</button>
        </div>
      </main>
    </>
  )
}

export default App
