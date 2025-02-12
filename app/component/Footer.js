"use client"; // Ensure this is a Client Component

import { useState } from "react";
import Link from "next/link";
const Footer = () => {
  return (<>
    <footer className="bg-white dark:bg-gray-900 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300">
            &copy; 2023 ChattyPie. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.56v14.91c0 .97-.79 1.76-1.76 1.76H1.76C.79 21.23 0 20.44 0 19.47V4.56C0 3.59.79 2.8 1.76 2.8h20.48c.97 0 1.76.79 1.76 1.76zM9.6 18.24V9.6H7.2v8.64h2.4zm-1.2-9.84c.79 0 1.44-.65 1.44-1.44 0-.79-.65-1.44-1.44-1.44-.79 0-1.44.65-1.44 1.44 0 .79.65 1.44 1.44 1.44zm10.8 9.84v-4.8c0-2.56-1.36-3.84-3.2-3.84-1.44 0-2.08.79-2.4 1.36v-1.16H12v8.64h2.4v-4.32c0-1.12.24-2.24 1.6-2.24 1.36 0 1.36 1.28 1.36 2.32v4.24H20z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.23 5.924c-.806.358-1.67.6-2.577.708a4.515 4.515 0 001.98-2.49 9.02 9.02 0 01-2.86 1.09 4.506 4.506 0 00-7.677 4.108 12.8 12.8 0 01-9.29-4.71 4.506 4.506 0 001.394 6.014 4.49 4.49 0 01-2.04-.563v.057a4.506 4.506 0 003.616 4.415 4.52 4.52 0 01-2.034.077 4.507 4.507 0 004.21 3.128 9.036 9.036 0 01-5.6 1.93c-.364 0-.724-.022-1.08-.064a12.75 12.75 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.195-.004-.39-.013-.584a9.172 9.172 0 002.26-2.34z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  </>)
}

export default Footer
