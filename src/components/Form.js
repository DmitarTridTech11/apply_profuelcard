import { useState } from "react";
import emailjs from 'emailjs-com';

const Form = ({ currentStepHandler, step, formDataHandler }) => {
  const [finalForm, setFinalForm] = useState({});

  const [formDataStepOne, setFormDataStepOne] = useState({
    firstName: "",
    lastName: "",
    zipCode: "",
    businessName: "",
    email: "",
    phoneNumber: "",
    vehiclesNumber: "",
  });

  const [formDataStepTwo, setFormDataStepTwo] = useState({
    businessAddress: "",
    businessAddress2: "",
    state: "",
    city: "",
    dot: "", 
    mc: "",
    typeOfBusiness: "",
    driversCount: "",
    estimatedMonthlyFuelSpend: "",
    yearsinBusiness: "",
  });

  const [formDataStepThree, setFormDataStepThree] = useState({
    firstNameOwner: "",
    lastNameOwner: "",
    dateOfBirth: "",
    socialSecNumber: "",
    streetAddress: "",
    mobilePhoneNumber: "",
    privateEmail: "",
  });

  function formatPhoneNumber(number) {
    // Convert the number to a string, in case a numeric type is passed
    let phoneNumber = String(number);
  
    // Remove all non-numeric characters from the string
    phoneNumber = phoneNumber.replace(/\D/g, '');
  
    // Extract the parts of the phone number based on the US standard format
    const areaCode = phoneNumber.substring(0, 3);
    const middle = phoneNumber.substring(3, 6);
    const last = phoneNumber.substring(6, 10);
  
    // Combine the parts into the desired format
    return `(${areaCode}) ${middle}-${last}`;
  }
  
  const formHandler = async (e) => {
    e.preventDefault();

    if (step === 1) {
      // Validation for Step 1: Check if all fields are filled
      const allFieldsFilledStepOne = Object.values(formDataStepOne).every(field => field.trim() !== "");
      if (!allFieldsFilledStepOne) {
        alert("Please fill all fields in this step.");
        return; // Prevent moving to the next step
      }
    } else if (step === 2) {
      // Validation for Step 2: Check if all fields are filled
      const allFieldsFilledStepTwo = Object.values(formDataStepTwo).every(field => field.trim() !== "");
      if (!allFieldsFilledStepTwo) {
        alert("Please fill all fields in this step.");
        return; // Prevent moving to the next step
      }
    } else if (step === 3) {
      // Validation for Step 3: Check if all fields are filled
      const allFieldsFilledStepThree = Object.values(formDataStepThree).every(field => field.trim() !== "");
      if (!allFieldsFilledStepThree) {
        alert("Please fill all fields in this step.");
        return; // Prevent moving to the next step
      }
      // Combine all form data for the final step
      setFinalForm({ ...formDataStepOne, ...formDataStepTwo, ...formDataStepThree });
    }

    // Increment the step only if all validations pass
    currentStepHandler(step + 1);

    const sendEmail = (data) => {
      // var endpointUrl = "https://public.herotofu.com/v1/b9222170-0548-11ee-8025-97a9fb2f29da"
      // fetch(endpointUrl, {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // })
      //   .then((response) => {
      //     if (response.status === 422) {
      //       throw new Error("Are you robot?");
      //     }
      //     if (response.status !== 200) {
      //       throw new Error(`${response.statusText} (${response.status})`);
      //     }
      //     return response.json();
      //   })
      //   .then(() => {
      //   })
      //   .catch((err) => {
      //   });
      
      emailjs.send('service_n9p2maj', 'template_27oxwma', {from_name: formDataStepOne.firstName, message: JSON.stringify(data)}, 'eR_z0Vz_6nMqokigU')
        .then((result) => {
          console.log('Email successfully sent!', result.text);
        }, (error) => {
          console.log('An error occurred while sending the email:', error.text);
        });
    };

    if(step === 4){
      var data = {...formDataStepOne, ...formDataStepTwo, ...formDataStepThree}
      var res = await sendEmail(data)
      currentStepHandler(step + 1);
    }
  };

  const handleBack = () => {
    currentStepHandler(step - 1); // Call the function passed as a prop to go back one step
  };

  const handleChange = (e) => {
    if (step === 1) setFormDataStepOne({ ...formDataStepOne, [e.target.id]: e.target.value });
    if (step === 2) setFormDataStepTwo({ ...formDataStepTwo, [e.target.id]: e.target.value });
    if (step === 3) setFormDataStepThree({ ...formDataStepThree, [e.target.id]: e.target.value });
  };

  return Object.keys(finalForm).length == 0 ? (
    <form onSubmit={formHandler} style={{width: 500}}>
      {step === 1 && (
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

          <div className="grid md:grid-cols-2 md:gap-3">
            <div className="mb-6">
              <input
                id="zipCode"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Zip Code *"
                value={formDataStepOne.zipCode}
                onChange={handleChange}
                required
              />
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
              type="number"
              id="vehiclesNumber"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Number of vehicles in your fleet *"
              value={formDataStepOne.vehiclesNumber}
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
      )}

      {step === 2 && (
        <div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6">
              <input
                id="businessAddress"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Business Address *"
                value={formDataStepTwo.businessAddress}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">

              <input
                id="businessAddress2"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Business Address 2 *"
                value={formDataStepTwo.businessAddress2}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6">
              <input
                id="state"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="State *"
                value={formDataStepTwo.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <input
                id="city"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="City *" 
                value={formDataStepTwo.city}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6">
              <input
                id="dot"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="DOT Number *"
                value={formDataStepTwo.dot}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <input
                id="mc"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="MC *"
                value={formDataStepTwo.mc}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <input
              id="typeOfBusiness"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Type of business *"
              value={formDataStepTwo.typeOfBusiness}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="number"
              id="driversCount"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="How many drivers do you have? *"
              value={formDataStepTwo.driversCount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="number"
              id="estimatedMonthlyFuelSpend"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Estimated Monthly Fuel Spend *"
              value={formDataStepTwo.estimatedMonthlyFuelSpend}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="number"
              id="yearsinBusiness"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Years in business *"
              value={formDataStepTwo.yearsinBusiness}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      )}



      {step === 3 && (
        <div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6">
              <input
                id="firstNameOwner"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="First Name *"
                value={formDataStepThree.firstNameOwner}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <input
                id="lastNameOwner"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Last Name *"
                value={formDataStepThree.lastNameOwner}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <input
              type="text"
              id="dateOfBirth"
              placeholder="Date of Birth *"
              onChange={handleChange}
              onFocus={() => (document.getElementById('dateOfBirth').type = 'date')}
              onBlur={() => {
                if (document.getElementById('dateOfBirth').value === '') {
                  document.getElementById('dateOfBirth').type = 'text';
                }
              }}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6">
              <input
                id="socialSecNumber"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Social Number *"
                value={formDataStepThree.socialSecNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <input
                id="streetAddress"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Street Address *"
                value={formDataStepThree.streetAddress}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6">
              <input
                id="mobilePhoneNumber"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Mobile phone number *"
                value={formDataStepThree.mobilePhoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <input
                id="privateEmail"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Email *"
                value={formDataStepThree.privateEmail}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
      )}

    <div style={{display: "flex", justifyContent: "space-between"}}>
      <div >
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

        <div >
          <button
            onClick={formHandler}
            type="submit"
            className="rounded-3xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Next step
          </button>
        </div>
      </div>

    </form>
  ) : (
    <div>
      <div className="flex-row bg-gray-100 rounded-xl p-6" style={{flexDirection: "row", display: "flex"}}>

        <div style={{marginRight: 40}}>
          <div className="flex items-center justify-between">
            <p style={{fontWeight: "500", fontSize: 20}}>{finalForm.firstName} {finalForm.lastName}</p> 
          </div>

          <div className="flex items-center" style={{marginTop: 15}}>
            <p>{finalForm.email}</p>
          </div>

          <div className="flex items-center">
            <p>{formatPhoneNumber(finalForm.phoneNumber)}</p>
          </div>

          <div className="flex items-center justify-between" style={{marginTop: 20}}>
            <p>{finalForm.businessName}</p>
          </div>

          <div className="flex items-center justify-between">
            <p>BN: {finalForm.zipCode}</p>
          </div>

          <div className="flex items-center justify-between">
            <p>Vehicles No: {finalForm.vehiclesNumber}</p>
          </div>

          <div className="flex items-center justify-between" style={{marginTop: 20}}>
            <p>{finalForm.businessAddress}</p>
          </div>

          <div className="flex items-center justify-between">
            <p>{finalForm.businessAddress2}</p>
          </div>

          <div className="flex items-center justify-between">
            <p>{finalForm.state}</p>
          </div>

          <div className="flex items-center justify-between" style={{marginTop: 20}}>
            <p>Type: {finalForm.typeOfBusiness}</p>
          </div>

          <div className="flex items-center justify-between">
            <p>Drivers Count: {finalForm.driversCount}</p>
          </div>

          <div className="flex items-center justify-between">
            <p>Estimated Monthly Fuel Spend: {finalForm.estimatedMonthlyFuelSpend}</p>
          </div>

        </div>

        <div>
          <div className="flex items-center justify-between">
              <p style={{fontSize: 20, fontWeight: "500"}}>Owner: {finalForm.firstNameOwner} {finalForm.lastNameOwner}</p>
            </div>

            <div className="flex items-center justify-between">
              <p style={{marginTop: 15}}>{finalForm.dateOfBirth}</p>
            </div>

            <div className="flex items-center justify-between">
              <p>Social Security Number: {finalForm.socialSecNumber}</p>
            </div>

            <div className="flex items-center justify-between">
              <p>{finalForm.streetAddress}</p>
            </div>

            <div className="flex items-center justify-between">
              <p>{formatPhoneNumber(finalForm.mobilePhoneNumber)}</p>
            </div>
        </div>
      </div>

      <button
        onClick={formHandler}
        className="text-white mt-5  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {step === 4 ? "Submit" : "Next Step"}
      </button>
    </div>
  );
};

export default Form;
