import "./App.css";
import data from "../data.json";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(true);

  const darkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", isDark);
  };

  return (
    <div class="w-full mx-auto p-4 bg-gray-900 dark:bg-gray-200 min-h-screen">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-center justify-between border-1 border-gray-700 gap-4 rounded-xl p-4 bg-gray-700 dark:bg-gray-100 dark:border-1 dark:border-gray-400">
          <img
            src="/public/images/logo.svg"
            alt="logo"
            class="w-32 h-auto text-white"
          />
          <button
            onClick={() => {
              darkMode(!isDark);
            }}
            class="flex items-center gap-2"
            type="button"
            id="theme-toggle"
          >
            {isDark ? (
              <img
                src="/public/images/icon-sun.svg"
                alt="logo"
                class="w-10 h-auto rounded-xl p-2 bg-gray-500 "
              />
            ) : (
              <img
                src="/public/images/icon-moon.svg"
                alt="logo"
                class="w-10 h-auto rounded-xl p-2 dark:bg-gray-200 "
                id="moon"
              />
            )}
          </button>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-between gap-4 rounded-xl p-4 mt-10">
          <h1 class="text-3xl text-gray-100 dark:text-gray-800 font-bold">
            Extensions List
          </h1>
          <div class="flex gap-4 items-center">
            <ul class="flex gap-4 items-center">
              <a
                href="#"
                class="py-2 px-4 rounded-3xl bg-gray-700 text-white dark:text-gray-800 dark:bg-gray-100"
              >
                All
              </a>
              <a
                href="#"
                class="py-2 px-4 rounded-3xl text-blue-900 bg-red-500 dark:text-gray-100"
              >
                Active
              </a>
              <a
                href="#"
                class="py-2 px-6 rounded-3xl bg-gray-700 text-white dark:text-gray-800 dark:bg-gray-100"
              >
                Inactive
              </a>
            </ul>
          </div>
        </div>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {data.map((item) => (
            <div
              key={item.id}
              class="flex flex-col items-start justify-start gap-4 rounded-xl px-4 py-4 text-gray-300 bg-gray-800 border-1 border-gray-400 dark:bg-gray-100 dark:text-gray-800"
            >
              <div class="flex gap-4 justify-center items-center">
                <img src={item.logo} alt={item.name} class="w-12 h-auto mb-4" />
                <div class="flex flex-col items-start justify-between gap-2">
                  <h2 class="text-md font-bold mt-2">{item.name}</h2>
                  <p class="text-sm">{item.description}</p>
                </div>
              </div>
              <div class="flex gap-4 items-center justify-between mt-8 w-full">
                <a
                  href="#"
                  class="py-1 px-4 rounded-3xl bg-gray-700 border-1 border-gray-400 text-white dark:bg-transparent dark:text-gray-500"
                >
                  Remove
                </a>

                <label for="name" class="text-white text-end">
                  <inpu type="checkbox" value="" class="sr-only peer" />
                  <div class="relative w-9 h-5 bg-red-400 peer rounded-full peer dark:bg-red-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
