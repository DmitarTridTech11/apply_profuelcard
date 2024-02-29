import "./App.css";
import Steper from "./components/Steper";
import Form from "./components/Form";
import Confirmation from "./components/Confirmation";
import { useState } from "react";
import logo from "./resources/logo.png";

function App() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({});

  const currentStepHandler = (step) => {
    setStep(step);
  };

  const formDataHandler = (form) => {
    setForm(form);
  };

  return (
    <div className="App">
      {step < 5 ? (
        <>
          <div className="App-header flex flex-col justify-center items-center pt-7">
            {/* Section for "Join ProFuelCard" and logo */}
            <div className="w-full max-w-5xl flex justify-between items-center mb-10 p-5">
              <h2 className="text-5xl font-bold">Join ProFuelCard</h2>
              <img src={logo} alt="ProFuelCard Logo" className="h-12" />
            </div>

            {/* Stepper and Form */}
            <div className="flex flex-row justify-between items-center ">
              <div className="p-10 ease-in-out duration-500">
                <Steper step={step} />
              </div>
              <div className="pl-10" style={{width: 600}}>
                <Form currentStepHandler={currentStepHandler} step={step} formDataHandler={formDataHandler} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="App-header flex flex-col justify-center items-center pt-7">
          <Confirmation form={form}></Confirmation>
        </div>
      )}

      <div style={{ marginTop: -50 }}>
        <p className="text-center text-black">
          Need help?{" "}
          <a href="mailto:info@profuelcard.me" className="text-blue-400">
            Click here to contact us
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;