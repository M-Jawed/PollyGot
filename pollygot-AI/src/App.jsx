import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import parrot from './assets/parrot.png'
import headerBg from './assets/background.png'
import './App.css'

function App() {
  const [userData, setUserData] = useState({
    content: null,
    language: null,
  })
  const [aiOutput, setAiOutput] = useState()
  const [loading, setLoading] = useState(false)

  function handleTextareValue(e){
    setUserData(prev => {
      return {...prev, content: e.target.value}
    })
  }

  function handleLanguageInput(e){
    setUserData(prev => {
      return {...prev, language: e.target.value}
    })
  }

  async function handleSubmit(e){
    e.preventDefault( )

    console.log(userData)

      try {
          setLoading(prev => !prev)
          const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
          "HTTP-Referer": "http://localhost:5173/", // Optional. Site URL for rankings on openrouter.ai.
          "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "deepseek/deepseek-r1:free",
          "messages": [
            {
              "role": "system",
              "content": "You are a translator, you help the user with a specific language they have chosen and you will translate every sentences the user provides you."
            },
            {
              "role": "user",
              "content": `Translate the following text to ${userData.language}:\n\n${userData.content}`
            }
          ]
        })
      });
    const data = await res.json()
    setAiOutput(prev => data.choices[0].message.content)
      } catch(err){
          console.log('Failed with the status code of ', err.status)
      } finally {
        setLoading(prev => !prev)
      }
    }

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
        <div className='flex flex-col items-center border-[4px] border-[#252F42] rounded-[15px] w-[365px] h-[755px] py-5 px-5'>   
            <form onSubmit={handleSubmit} className='w-full mt-5 flex flex-col self-start text-start px-5'>
              <h1 className='text-[#035A9D] text-[1.25rem] font-bold'>Text to translate👇</h1>
              <textarea
                className='w-[100%] h-[118px] bg-[#EFF0F4] px-3 py-3 mt-5 rounded-[8px] resize-none' 
                type="text" 
                name="text" 
                id="translationTextInput"
                placeholder='How are you?' 
                onChange={handleTextareValue}
              ></textarea>
              <h1 className='text-[#035A9D] text-[1.25rem] font-bold mt-5'>Output👇</h1>
              <textarea 
              className='w-[100%] h-[200px] bg-[#EFF0F4] px-3 py-3 mt-5 rounded-[8px] resize-none'
              name="text" 
              id="text"
              placeholder='Translated text will appear here'
              readOnly
              value={aiOutput}
              ></textarea>
            <h1 className='text-[#035A9D] font-bold text-[1.25rem] mt-5 mb-5'>Select languages👇</h1>
              <label className='font-bold'>
                <input className='mr-2 ' type="radio" name='languages' value='french' onClick={handleLanguageInput}/>
                French
              </label>

              
              <label className='font-bold'>
                <input className='mr-2' type="radio" name='languages' value='spanish' onClick={handleLanguageInput}/>
                Spanish 
              </label>

              <label className='font-bold'>
                <input className='mr-2' type="radio" name='languages' value='japanese' onClick={handleLanguageInput}/>
                Japanese
              </label>

              <button type='submit' className='bg-[#035A9D] w-[100%] py-2 text-white font-bold text-2xl mt-15 flex items-center justify-center rounded-[6px] cursor-pointer'> {loading ? 'Translating...' : 'Translate'} </button>
            </form> 
        </div>
      </main>
    </>
  )
}

export default App
