'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky inset-x-0 top-0 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start">
      <nav className="relative mx-2 mt-4 w-full max-w-2xl rounded-3xl border border-gray-200 bg-white py-2.5 dark:border-neutral-700 dark:bg-neutral-900 md:mx-auto md:flex md:items-center md:justify-between md:px-4 md:py-0">
        <div className="flex items-center justify-between px-4 md:px-0">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center space-x-2">
            <Avatar className="size-9">
              <AvatarImage src="https://avatars.githubusercontent.com/u/17139728?u=ad58753aa4d0d95d7fb2010c7d29dba36ae5c5ca&v=4" />
              <AvatarFallback>NK</AvatarFallback>
            </Avatar>
            <span className="font-inter font-bold">Naazim Khan</span>
          </Link>
          {/* End Logo */}

          <div className="md:hidden">
            {/* Toggle Button */}
            <button
              type="button"
              className="hs-collapse-toggle flex size-6 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              id="hs-navbar-header-floating-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-header-floating"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-header-floating"
            >
              <svg
                className="hs-collapse-open:hidden size-3.5 shrink-0"
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
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden size-4 shrink-0"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            {/* End Toggle Button */}
          </div>
        </div>

        <div className="hidden grow overflow-hidden transition-all duration-300 md:block">
          <div className="mt-3 flex flex-col gap-2 py-2 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-3 md:py-0 md:ps-7">
            <Link
              href="#"
              className={cn(
                `border-s-2 px-4 py-0.5 font-medium focus:outline-none dark:text-neutral-200 md:border-b-2 md:border-s-0 md:px-1 md:py-3`,
                pathname === '/' && 'border-gray-800 text-gray-800 dark:border-neutral-200',
              )}
            >
              About
            </Link>
            <Link
              href="#"
              className="border-s-2 border-transparent px-4 py-0.5 text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200 md:border-b-2 md:border-s-0 md:px-1 md:py-3"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="border-s-2 border-transparent px-4 py-0.5 text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200 md:border-b-2 md:border-s-0 md:px-1 md:py-3"
            >
              Work
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
