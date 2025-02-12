"use client"; // Ensure this is a Client Component

import { useState } from "react";
import Link from "next/link";

const LandingPage = () => {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-700">


      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-gray-800 dark:to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Connect, Chat, and Share with <span className="text-yellow-400">ChattyPie</span>
          </h1>
          <p className="text-xl mb-8 animate-fade-in delay-100">
            The ultimate chat app for seamless communication. Fast, secure, and fun!
          </p>
          <div className="animate-fade-in delay-200">
            <Link
              href="/forums"
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white dark:bg-gray-900 transition-colors duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose ChattyPie?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center">
                <svg
                  className="w-12 h-12 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">
                Real-Time Chat
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Instantly connect with friends and family with real-time messaging.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center">
                <svg
                  className="w-12 h-12 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">
                Secure & Private
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                End-to-end encryption ensures your conversations stay private.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center">
                <svg
                  className="w-12 h-12 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">
                Cross-Platform
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Available on mobile, desktop, and web. Stay connected anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300">
                "ChattyPie is the best chat app I've ever used. It's fast, secure, and super easy to use!"
              </p>
              <div className="mt-4 flex items-center">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://via.placeholder.com/150"
                  alt="User"
                />
                <div className="ml-3">
                  <p className="font-semibold text-gray-900 dark:text-white">John Doe</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CEO, Example Corp</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300">
                "I love how ChattyPie works across all my devices. It's a game-changer!"
              </p>
              <div className="mt-4 flex items-center">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://via.placeholder.com/150"
                  alt="User"
                />
                <div className="ml-3">
                  <p className="font-semibold text-gray-900 dark:text-white">Jane Smith</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Freelancer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300">
                "The end-to-end encryption gives me peace of mind. Highly recommend ChattyPie!"
              </p>
              <div className="mt-4 flex items-center">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://via.placeholder.com/150"
                  alt="User"
                />
                <div className="ml-3">
                  <p className="font-semibold text-gray-900 dark:text-white">Alex Johnson</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}

    </div>
  );
};

export default LandingPage;