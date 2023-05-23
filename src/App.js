import "./App.css";
import Steper from "./components/Steper";
import Form from "./components/Form";
import Confirmation from "./components/Confirmation";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({});

  const currentStephandler = (step) => {
    setStep(step);
  };

  const formDataHandler = (form) => {
    setForm(form);
  };

  return (
    <div className="App">
      {step < 5 ? (
        <div className="App-header flex-row justify-center items-center pt-7">
          <div className="bg-blue-400 p-10 rounded-xl shadow-2xl hover:bg-blue-500 ease-in-out duration-500">
            <Steper step={step} />
          </div>
          <div className="pl-10 ">
            <Form currentStephandler={currentStephandler} step={step} formDataHandler={formDataHandler} />
          </div>
        </div>
      ) : (
        <div className="App-header flex-row justify-center items-center pt-7">
          <Confirmation form={form}></Confirmation>
        </div>
      )}

      <div style={{ backgroundColor: "#282c34", marginTop: -50 }}>
        <p className="text-center text-white">
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
