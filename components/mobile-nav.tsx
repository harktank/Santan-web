"use client"

import Link from "next/link"
import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={() => setIsOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <Dialog as="div" className="lg:hidden" open={isOpen} onClose={setIsOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Sanatan Heritage</span>
              <img className="h-8 w-auto" src="/images/navbar-logo.jpeg" alt="Sanatan Heritage Logo" />
            </Link>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setIsOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="block px-6 py-4 text-orange-800 hover:bg-orange-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sanatan Discoveries
                </Link>
                <Link
                  href="/about"
                  className="block px-6 py-4 text-orange-700 hover:bg-orange-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="block px-6 py-4 text-orange-700 hover:bg-orange-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sanatan Sishushala
                </Link>
                <Link
                  href="#"
                  className="block px-6 py-4 text-orange-700 hover:bg-orange-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sanatan Gurukulam
                </Link>
                <Link
                  href="#"
                  className="block px-6 py-4 text-orange-700 hover:bg-orange-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sanatan Viswavidyalaya
                </Link>
                <Link
                  href="/events"
                  className="block px-6 py-4 text-orange-700 hover:bg-orange-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Events
                </Link>
                <Link
                  href="/blog"
                  className="block px-6 py-4 text-orange-700 hover:bg-orange-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="block px-6 py-4 text-orange-700 hover:bg-orange-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
