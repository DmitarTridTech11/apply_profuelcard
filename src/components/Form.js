import { useState } from "react";

const Form = ({ currentStephandler, step, formDataHandler }) => {
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

  const formHandler = (e) => {
    e.preventDefault();

    if (step === 4) currentStephandler(step + 1);

    if (step === 3) {
      setFinalForm({ ...formDataStepOne, ...formDataStepTwo, ...formDataStepThree });
    }

    if (
      formDataStepOne.firstName !== "" &&
      formDataStepOne.lastName !== "" &&
      formDataStepOne.zipCode !== "" &&
      formDataStepOne.businessName !== "" &&
      formDataStepOne.email !== "" &&
      formDataStepOne.phoneNumber !== "" &&
      formDataStepOne.vehiclesNumber !== ""
    )
      currentStephandler(step + 1);
  };

  const handleChange = (e) => {
    if (step === 1) setFormDataStepOne({ ...formDataStepOne, [e.target.id]: e.target.value });
    if (step === 2) setFormDataStepTwo({ ...formDataStepTwo, [e.target.id]: e.target.value });
    if (step === 3) setFormDataStepThree({ ...formDataStepThree, [e.target.id]: e.target.value });
  };

  return Object.keys(finalForm).length == 0 ? (
    <form onSubmit={formHandler}>
      {step === 1 && (
        <div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">
                First Name
              </label>
              <input
                id="firstName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="First Name"
                value={formDataStepOne.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-white dark:text-white">
                Last Name
              </label>
              <input
                id="lastName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Last Name"
                value={formDataStepOne.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6">
              <label htmlFor="zipCode" className="block mb-2 text-sm font-medium text-white dark:text-white">
                Business Zip Code
              </label>
              <input
                id="zipCode"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Zip Code"
                value={formDataStepOne.zipCode}
                onChange={handleChange}
                // required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="businessName" className="block mb-2 text-sm font-medium text-white dark:text-white">
                Business Name
              </label>
              <input
                id="businessName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Business Name"
                value={formDataStepOne.businessName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Your email"
              value={formDataStepOne.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="vehiclesNumber" className="block mb-2 text-sm font-medium text-white dark:text-white">
              How many vehicles are in your fleet?
            </label>
            <input
              type="number"
              id="vehiclesNumber"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Number of vehicles"
              value={formDataStepOne.vehiclesNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-white dark:text-white">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="phone"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Phone Number"
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
              <label htmlFor="businessAddress" className="block mb-2 text-sm font-medium text-white dark:text-white">
                Business Address
              </label>
              <input
                id="businessAddress"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Business Address"
                value={formDataStepTwo.businessAddress}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="businessAddress2" className="block mb-2 text-sm font-medium text-white dark:text-white">
                Business Address 2(Suite#, Ste#, Unit#)
              </label>
              <input
                id="businessAddress2"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Business Address 2"
                value={formDataStepTwo.businessAddress2}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6">
              <label htmlFor="state" className="block mb-2 text-sm font-medium text-white dark:text-white">
                State
              </label>
              <input
                id="state"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="State"
                value={formDataStepTwo.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="City" className="block mb-2 text-sm font-medium text-white dark:text-white">
                City
              </label>
              <input
                id="City"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="City"
                value={formDataStepTwo.city}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6">
              <label htmlFor="dot" className="block mb-2 text-sm font-medium text-white dark:text-white">
                DOT Number
              </label>
              <input
                id="dot"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="DOT"
                value={formDataStepTwo.dot}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="mc" className="block mb-2 text-sm font-medium text-white dark:text-white">
                MC Number
              </label>
              <input
                id="mc"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="MC"
                value={formDataStepTwo.mc}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <label htmlFor="typeOfBusiness" class="block mb-2 text-sm font-medium text-white dark:text-white">
            Type of business
          </label>
          <select
            value={formDataStepTwo.typeOfBusiness}
            onChange={handleChange}
            id="typeOfBusiness"
            class="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="Alien Corp">Alien Corp</option>
            <option value="C Corporation">C Corporation</option>
            <option value="Close Corporation">Close Corporation</option>
            <option value="General Partnership">General Partnership</option>
            <option value="Government">Government</option>
            <option value="Limited Liability Company">Limited Liability Company</option>
            <option value="Limited Liability Partnership">Limited Liability Partnership</option>
            <option value="Non-profit">Non-profit</option>
            <option value="Publicy Traded Corporation">Publicy Traded Corporation</option>
            <option value="S Corporation">S Corporation</option>
            <option value="Trust">Trust</option>
          </select>

          <div className="mb-6">
            <label htmlFor="driversCount" className="block mb-2 text-sm font-medium text-white dark:text-white">
              How many drivers do you have?
            </label>
            <input
              type="number"
              id="driversCount"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Number of drivers"
              value={formDataStepTwo.driversCount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="estimatedMonthlyFuelSpend" className="block mb-2 text-sm font-medium text-white dark:text-white">
              Estimated Monthly Fuel Spend
            </label>
            <input
              type="number"
              id="estimatedMonthlyFuelSpend"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Monthly Fuel Spend"
              value={formDataStepTwo.estimatedMonthlyFuelSpend}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="yearsinBusiness" className="block mb-2 text-sm font-medium text-white dark:text-white">
              Years in business
            </label>
            <input
              type="number"
              id="yearsinBusiness"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Years in business"
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
              <label htmlFor="firstNameOwner" className="block mb-2 text-sm font-medium text-white dark:text-white">
                First Name
              </label>
              <input
                id="firstNameOwner"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="First Name"
                value={formDataStepThree.firstNameOwner}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="lastNameOwner" className="block mb-2 text-sm font-medium text-white dark:text-white">
                Last Name
              </label>
              <input
                id="lastNameOwner"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Last Name"
                value={formDataStepThree.lastNameOwner}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="dateOfBirth" className="block mb-2 text-sm font-medium text-white dark:text-white">
              Date of birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Date of birth"
              value={formDataStepThree.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6">
              <label htmlFor="socialSecNumber" className="block mb-2 text-sm font-medium text-white dark:text-white">
                Social number
              </label>
              <input
                id="socialSecNumber"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Social number"
                value={formDataStepThree.socialSecNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="streetAddress" className="block mb-2 text-sm font-medium text-white dark:text-white">
                Street Address
              </label>
              <input
                id="streetAddress"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Street Address"
                value={formDataStepThree.streetAddress}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6">
              <label htmlFor="mobilePhoneNumber" className="block mb-2 text-sm font-medium text-white dark:text-white">
                Mobile phone number
              </label>
              <input
                id="mobilePhoneNumber"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Mobile phone number"
                value={formDataStepThree.mobilePhoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="privateEmail" className="block mb-2 text-sm font-medium text-white dark:text-white">
                Email
              </label>
              <input
                id="privateEmail"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Email"
                value={formDataStepThree.privateEmail}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
      )}
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {step === 3 ? "Apply" : "Next Step"}
      </button>
    </form>
  ) : (
    <div>
      <div className="flex-row justify-between items-center w-96 bg-gray-100 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <p className="mr-2">First Name:</p>
          <p>{finalForm.firstName}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="mr-2">Last Name:</p>
          <p>{finalForm.lastName}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="mr-2">Zip Code</p>
          <p>{finalForm.zipCode}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="mr-2">Business Name</p>
          <p>{finalForm.businessName}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="mr-2">Business Name:</p>
          <p>{finalForm.businessName}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="mr-2">Email:</p>
          <p>{finalForm.email}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="mr-2">Phone Number:</p>
          <p>{finalForm.phoneNumber}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="mr-2">Vehicles Number:</p>
          <p>{finalForm.vehiclesNumber}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="mr-2">Business Address:</p>
          <p>{finalForm.businessAddress}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="mr-2">Business Address 2:</p>
          <p>{finalForm.businessAddress2}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="mr-2">State:</p>
          <p>{finalForm.state}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="mr-2">City:</p>
          <p>{finalForm.city}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="mr-2">Type of Business:</p>
          <p>{finalForm.typeOfBusiness}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="mr-2">Drivers Count:</p>
          <p>{finalForm.driversCount}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="mr-2">Estimated Monthly Fuel Spend:</p>
          <p>{finalForm.estimatedMonthlyFuelSpend}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="mr-2">Years in Business:</p>
          <p>{finalForm.yearsinBusiness}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="mr-2">First Name Owner:</p>
          <p>{finalForm.firstNameOwner}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="mr-2">Last Name Owner:</p>
          <p>{finalForm.lastNameOwner}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="mr-2">Date of Birth:</p>
          <p>{finalForm.dateOfBirth}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="mr-2">Social Security Number:</p>
          <p>{finalForm.socialSecNumber}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="mr-2">Street Address:</p>
          <p>{finalForm.streetAddress}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="mr-2">Mobile Phone Number:</p>
          <p>{finalForm.mobilePhoneNumber}</p>
        </div>
      </div>

      <button
        onClick={formHandler}
        className="text-white mt-5  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {step === 4 ? "Apply" : "Next Step"}
      </button>
    </div>
  );
};

export default Form;
