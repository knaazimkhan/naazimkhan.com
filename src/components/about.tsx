import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <div className="mt-8">
      <p className="text-sm text-gray-600 dark:text-neutral-400">
        I am a full stack developer with 6+ years of experience in creating efficient, user-friendly
        applications. Dedicated to delivering innovative and impactful solutions across the entire
        development lifecycle.
      </p>

      {/* <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
        Currently, I work full time for Smart Chain Information Technology Consulting Ltd, where I
        develop new features in the client-facing vertical and organized cross-team guilds to
        address engineering challenges effectively. I also mentored 4-5 entry-level engineers across
        the organization, supporting their growth and development.
      </p>

      <p>
        A key achievement was leading the migration of critical products to a modern Next.js and
        Payload CMS-based platform, improving scalability and performance.
      </p> */}

      <ul className="mt-5 flex flex-col gap-y-3">
        <li className="flex items-center gap-x-2.5">
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
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <a
            className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
            href="mailto:knaazimkhan@gmail.com"
          >
            knaazimkhan@gmail.com
          </a>
        </li>

        <li className="flex items-center gap-x-2.5">
          <svg
            className="size-3.5 shrink-0"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1881 10.1624L22.7504 0H20.7214L13.2868 8.82385L7.34878 0H0.5L9.47944 13.3432L0.5 24H2.5291L10.3802 14.6817L16.6512 24H23.5L14.1881 10.1624ZM11.409 13.4608L3.26021 1.55962H6.37679L20.7224 22.5113H17.6058L11.409 13.4613V13.4608Z"
              fill="currentColor"
            />
          </svg>
          <Link
            className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
            href="https://x.com/knaazimkhan"
          >
            @knaazimkhan
          </Link>
        </li>

        <li className="flex items-center gap-x-2.5">
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
            <circle cx="12" cy="12" r="10" />
            <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
            <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
            <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
          </svg>
          <Link
            className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
            href="/"
          >
            naazimkhan.com
          </Link>
        </li>
      </ul>
    </div>
  )
}
