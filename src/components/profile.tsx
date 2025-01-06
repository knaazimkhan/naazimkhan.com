import Image from 'next/image'
import React from 'react'

export default function Profile() {
  return (
    <div className="flex items-center gap-x-3">
      <div className="shrink-0">
        <img
          className="size-16 shrink-0 rounded-full"
          src="https://avatars.githubusercontent.com/u/17139728?u=ad58753aa4d0d95d7fb2010c7d29dba36ae5c5ca&v=4"
          alt="Naazim Khan"
        />
      </div>

      <div className="grow">
        <h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">Naazim Khan</h1>
        <p className="text-sm text-gray-600 dark:text-neutral-400">
          Software Engineer | Full stack developer
        </p>
      </div>
    </div>
  )
}
