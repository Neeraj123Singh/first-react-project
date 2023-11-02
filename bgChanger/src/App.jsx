import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ColorButton } from './components/ColorButton'

function App() {
  const [color, setColor] = useState('red')

  return (
    <>
      <div className='w-full  h-screen duration-900' style = {{backgroundColor:color}}>
       <div className='fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <ColorButton color='Red' setColor={setColor}/>
          <ColorButton color='Blue' setColor={setColor}/>
          <ColorButton color='Green' setColor={setColor}/>
          <ColorButton color='Olive' setColor={setColor}/>
          <ColorButton color='Gray' setColor={setColor}/>
          <ColorButton color='Black' setColor={setColor}/>
          <ColorButton color='Orange' setColor={setColor}/>
        </div>
       </div>
      </div>
     
    </>
  )
}

export default App
