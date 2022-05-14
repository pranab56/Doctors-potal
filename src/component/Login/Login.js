import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="w-full max-w-sm p-6 m-auto bg-slate-300 rounded-md shadow-md dark:bg-gray-800 mt-10">
      <h1 class="text-3xl font-semibold text-center text-gray-700 dark:text-white mb-10">
        Doctors Portal
      </h1>

      <form class="mt-6">
        <div>
          <label
            for="email"
            class="block text-sm text-gray-800 dark:text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Please your email"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div class="mt-4">
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm text-gray-800 dark:text-gray-200"
            >
              Password
            </label>
            <a
              href="#"
              class="text-xs text-gray-600 dark:text-gray-400 hover:underline"
            >
              Forget Password?
            </a>
          </div>

          <input
            type="password"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div class="mt-6">
          <button class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Login
          </button>
        </div>
      </form>

      <div class="flex items-center justify-between mt-4">
        <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

        <a
          href="#"
          class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
        >
          or login with Social Media
        </a>

        <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
      </div>

      <div class="flex items-center mt-6 -mx-2">
        <button
          type="button"
          class="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
        >
          <svg class="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
            {" "}
          </svg>
          <span class="hidden mx-2 sm:inline">Sign in with Google</span>
        </button>
      </div>

      <Link
        class=" text-gray-700 dark:text-gray-200 hover:underline mt-8 text-xs font-gray text-center "
        to={"/register"}
      >
        Don't have an account?
      </Link>
    </div>
  );
};

export default Login;
