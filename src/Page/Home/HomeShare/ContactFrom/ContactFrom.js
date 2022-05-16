import React from "react";

const ContactFrom = () => {
  return (
    <section class="w-full max-w-2xl px-6 py-4 mx-auto bg-slate-300  rounded-md shadow-md dark:bg-gray-800 mt-20" >
      <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">
        Contact us
      </h2>
      <p class="mt-3 text-center text-gray-600 dark:text-gray-400">
        Stay connected with us
      </p>

      <div class="mt-6 ">
        <div class="items-center -mx-2 md:flex">
          <div class="w-full mx-2">
            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Name
            </label>

            <input
              class=" w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              type="text"
            />
          </div>

          <div class="w-full mx-2 mt-4 md:mt-0">
            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              E-mail
            </label>

            <input
              class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              type="email"
            />
          </div>
        </div>

        <div class="w-full mt-4">
          <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Message
          </label>

          <textarea class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
        </div>

        <div class="flex justify-center mt-6">
          <button class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            SUBMIT
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactFrom;
