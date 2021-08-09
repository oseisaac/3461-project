import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import StepHandler from './components/StepHandler';

function App() {

  const [step, setStep] = useState(1)

  const handleStep = (val) => {
    console.log(val)
    setStep(step + val)
  }
  return (
    <div className="App">
      <Header onStepChange={handleStep} />
      <Banner />
      <StepHandler step={step} onStepChange={handleStep} />
    </div>
  );
}

export default App;
