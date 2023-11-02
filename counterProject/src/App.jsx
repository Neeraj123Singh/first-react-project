import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Card } from './components/Card'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addCount = () =>{
    if(counter<20){
      setCounter(counter+1)
    }
  }

  const removeCount = () =>{
    if(counter>0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1 className='text-red-400 bg-red-900 p-4 rounded-xl'>Neeraj Counter value is {counter}</h1>
      <div className="card">
        <button onClick={addCount}>
         Increase
        </button>
        <br/>
        <button onClick={removeCount}>
          Decrease
        </button>
      </div>
      <Card  name = "MacBook" btnText='Read'/>
      <Card name = "HP" btnText='Look'/>
      <Card/>
    </>
  )
}

export default App
