import { useState } from "react";
import emailjs from "emailjs-com";

const Form = ({ currentStepHandler, step, formDataHandler }) => {
  const [formDataStepOne, setFormDataStepOne] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    phoneNumber: "",
    dot: "",
    mc: "",
    driversCount: "",
  });

  function formatPhoneNumber(number) {
    let phoneNumber = String(number);

    phoneNumber = phoneNumber.replace(/\D/g, "");

    const areaCode = phoneNumber.substring(0, 3);
    const middle = phoneNumber.substring(3, 6);
    const last = phoneNumber.substring(6, 10);

    return `(${areaCode}) ${middle}-${last}`;
  }

  const formHandler = async (e) => {
    e.preventDefault();

    if (step === 1) {
      const allFieldsFilledStepOne = Object.values(formDataStepOne).every(
        (field) => field.trim() !== ""
      );
      if (!allFieldsFilledStepOne) {
        alert("Please fill all fields in this step.");
        return;
      }
    }

    currentStepHandler(step + 1);

    const sendEmail = (data) => {
      const formatedSubject = `New Application from ${data.businessName}`
      const formattedMessage = `
      You got a new application from: ${data.firstName} ${data.lastName}

      Contact Information:
      Email: ${data.email}
      Phone Number: ${formatPhoneNumber(data.phoneNumber)}

      Business Information:
      Business Name: ${data.businessName}
      MC: ${data.mc}
      DOT: ${data.dot}    
      Drivers Count: ${data.driversCount}
  `;

      emailjs
        .send(
          "service_n9p2maj",
          "template_27oxwma",
          {
            from_name: formDataStepOne.firstName,
            message: formattedMessage,
            subject: formatedSubject,
          },
          "eR_z0Vz_6nMqokigU"
        )
        .then(
          (result) => {
            console.log("Email successfully sent!", result.text);
          },
          (error) => {
            console.log(
              "An error occurred while sending the email:",
              error.text
            );
          }
        );
    };

    if (step === 2) {
      var data = {
        ...formDataStepOne,
      };
      var res = sendEmail(data);
      currentStepHandler(step + 1);
    }
  };

  const handleBack = () => {
    currentStepHandler(step - 1);
  };

  const handleChange = (e) => {
    setFormDataStepOne({ ...formDataStepOne, [e.target.id]: e.target.value });
  };

  console.log("step", step);

  return step === 1 ? (
    <form onSubmit={formHandler} style={{ width: 500 }}>
      <div>
        <div className="grid md:grid-cols-2 md:gap-3">
          <div className="mb-6">
            <input
              id="firstName"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="First Name *"
              value={formDataStepOne.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <input
              id="lastName"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Last Name *"
              value={formDataStepOne.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <input
            id="businessName"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Business Name *"
            value={formDataStepOne.businessName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6">
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Your email *"
            value={formDataStepOne.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6">
          <input
            id="phoneNumber"
            type="phone"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Phone Number *"
            value={formDataStepOne.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="mb-6">
            <input
              id="dot"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="DOT Number *"
              value={formDataStepOne.dot}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <input
              id="mc"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="MC *"
              value={formDataStepOne.mc}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <input
            type="number"
            id="driversCount"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="How many drivers do you have? *"
            value={formDataStepOne.driversCount}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="rounded-3xl text-blue-700 border border-blue-700 bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:text-white"
            >
              Back
            </button>
          )}
        </div>

        <div>
          <button
            onClick={formHandler}
            type="submit"
            className="rounded-3xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Review
          </button>
        </div>
      </div>
    </form>
  ) : (
    <div>
      <div
        className="flex-row bg-gray-100 rounded-xl p-6"
        style={{ flexDirection: "row", display: "flex" }}
      >
        <div style={{ marginRight: 40 }}>
          <div className="flex items-center justify-between">
            <p style={{ fontWeight: "500", fontSize: 20 }}>
              {formDataStepOne.businessName}
            </p>
          </div>

          <div className="flex items-center" style={{ marginTop: 15 }}>
            <p>MC: {formDataStepOne.mc}</p>
          </div>

          <div className="flex items-center">
             <p>DOT: {formDataStepOne.dot}</p>
          </div>

          <div className="flex items-center">
             <p>Drivers Count: {formDataStepOne.driversCount}</p>
          </div>

          <div
            className="flex items-center justify-between"
            style={{ marginTop: 20, display: "flex", flexDirection: "column" }}
          >
             <p>{formDataStepOne.firstName} {formDataStepOne.lastName}</p>
            <p>{formatPhoneNumber(formDataStepOne.phoneNumber)}</p>
            
          </div>

          <div className="flex items-center justify-between">
            <p>{formDataStepOne.email}</p>
           
          </div>
        </div>
      </div>

      <button
        onClick={formHandler}
        className="text-white mt-5  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {step === 2 ? "Submit" : "Next Step"}
      </button>
    </div>
  );
};

export default Form;
