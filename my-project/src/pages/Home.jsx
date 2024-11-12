import { useState } from 'react'

import Header from "../components/Header";
import InputSection from "../components/InputSection";
import AlgorithmSelector from "../components/AlgorithmSelector";

const Home = () => {
  const [algorithm, setAlgorithm] = useState("AES");
  const [input, setInput] = useState("");

  const handleInputChange = (value) => setInput(value);
  return (
    <>
      <div>
        <Header />
        <AlgorithmSelector setAlgorithm={setAlgorithm}  />
        <InputSection handleInputChange={handleInputChange} />
        <div className="text-center my-4">
          <p>Selected Algorithm: {algorithm} </p>
          <p>Input: {input} </p>
        </div>
      </div>
    </>
  );
};

export default Home;
