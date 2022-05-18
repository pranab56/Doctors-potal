import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const handleSubmitModal = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const date = event.target.date.value;
    const name = event.target.fullName.value;
    const number = event.target.number.value;
    const email = event.target.email.value;
    const datas = {slot,date,name,number,email};

    fetch("http://localhost:5000/data", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datas),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
    // setTreatment(null)
  };

  return (
    <div>
      <input type="checkbox" id="Booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="Booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
              Account settings
            </h2>

            <form onSubmit={handleSubmitModal}>
              <div className="">
                <div>
                  <input
                    id="username"
                    name="date"
                    disabled
                    value={format(date, "PP")}
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <select name="slot" className="select select-bordered w-full">
                    {treatment?.slots?.map((slot) => (
                      <option value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <input
                    id="username"
                    autoComplete="off"
                    name="fullName"
                    placeholder="FULL NAME"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <input
                    id="username"
                    name="number"
                    autoComplete="off"
                    type="number"
                    placeholder="PHONE NUMBER"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <input
                    id="emailAddress"
                    autoComplete="off"
                    name="email"
                    placeholder="EMAIL"
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
              </div>

              <div className=" mt-6">
                <input
                  className="px-6 w-full py-2 leading-5 text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-secondary focus:outline-none focus:bg-gray-600"
                  type="submit"
                  value="SUBMIT"
                />
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
