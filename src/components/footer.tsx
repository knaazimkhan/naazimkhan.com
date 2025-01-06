import React from 'react'

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
      <div className="border-t border-gray-200 py-6 dark:border-neutral-700">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs text-gray-600 dark:text-neutral-400">© 2024 Preline Labs.</p>
          </div>
          {/* End Col */}

          {/* List */}
          <ul className="flex flex-wrap items-center">
            <li className="relative inline-block pe-4 text-xs before:absolute before:end-1.5 before:top-1/2 before:size-[3px] before:-translate-y-1/2 before:rounded-full before:bg-gray-400 last:pe-0 last-of-type:before:hidden dark:text-neutral-500 dark:before:bg-neutral-600">
              <a
                className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
                href="#"
              >
                X (Twitter)
              </a>
            </li>
            <li className="relative inline-block pe-4 text-xs before:absolute before:end-1.5 before:top-1/2 before:size-[3px] before:-translate-y-1/2 before:rounded-full before:bg-gray-400 last:pe-0 last-of-type:before:hidden dark:text-neutral-500 dark:before:bg-neutral-600">
              <a
                className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
                href="#"
              >
                Dribbble
              </a>
            </li>
            <li className="inline-block pe-4 text-xs">
              <a
                className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
                href="#"
              >
                Github
              </a>
            </li>
            <li className="inline-block">
              {/* Dark Mode */}
              <button
                type="button"
                className="hs-dark-mode hs-dark-mode-active:hidden relative flex size-7 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                data-hs-theme-click-value="dark"
              >
                <span className="sr-only">Dark</span>
                <svg
                  className="size-3.5 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              </button>
              <button
                type="button"
                className="hs-dark-mode hs-dark-mode-active:flex relative flex hidden size-7 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                data-hs-theme-click-value="light"
              >
                <span className="sr-only">Light</span>
                <svg
                  className="size-3.5 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
              </button>
              {/* End Dark Mode */}
            </li>
          </ul>
          {/* End List */}
        </div>
      </div>
    </footer>
  )
}
