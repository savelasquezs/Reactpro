import { useState } from 'react'
import './App.css'
import NavButton from './components/Sidebar/NavButton'

function App() {
  const [papacho, setPapacho]=useState("Mi fai")

  return (
   <>
      <input type="text" onChange={(e)=>setPapacho(e.target.value)}/>
      <h2>Hola mi papacho</h2>
      <p>{papacho}</p>
      <NavButton title="Hola mi so" icon="❤️"/>
   </>
  ) 
}

export default App

