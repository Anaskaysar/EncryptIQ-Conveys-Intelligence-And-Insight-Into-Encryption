import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import AlgorithmSelector from './components/AlgorithmSelector'
import InputSection from './components/InputSection'
import Header2 from './components/Header2'

function App() {
  const [algorithm, setAlgorithm] = useState('AES');
  const [input, setInput] = useState('');

  const handleInputChange = (value) => setInput(value);

  return (
    <>
      <div className="App">
      <Header />
      {/* <Header2/> */}
      <AlgorithmSelector setAlgorithm={setAlgorithm} />
      <InputSection handleInputChange={handleInputChange} />
      <div className="text-center my-4">
        <p>Selected Algorithm: {algorithm}</p>
        <p>Input: {input}</p>
      </div>
    </div>
    </>
  )
}

export default App
