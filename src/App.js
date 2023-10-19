import React from 'react'
import './App.css'
import Card from './components/card'
const App = () => {
  return (
    <div className='container flex flex-col flex-wrap text-center justify-center mt-5'>
      <h1 className='text-4xl text-indigo-500 p-5 font-semibold'>Weather App</h1>
      <p>This WebApp is built completely on React.Js</p>
      <Card />
    </div>
  )
}

export default App