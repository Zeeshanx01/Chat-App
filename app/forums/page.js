'use client'
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const topics = [
  {
    text: "Python",
    img: "/python.png",
    desc: "Discuss everything about Python programming, from basics to advanced topics.",
  },
  {
    text: "JavaScript",
    img: "/javascript.png",
    desc: "Explore JavaScript frameworks, libraries, and best practices.",
  },
  {
    text: "React",
    img: "/react.png",
    desc: "Share knowledge and ask questions about React and its ecosystem.",
  },
  {
    text: "Node.js",
    img: "/nodejs.png",
    desc: "Learn and discuss backend development with Node.js.",
  },
  {
    text: "Machine Learning",
    img: "/ml.png",
    desc: "Dive into the world of AI and machine learning algorithms.",
  },
  {
    text: "DevOps",
    img: "/devops.png",
    desc: "Discuss tools, practices, and culture for DevOps professionals.",
  },
];

const Forums = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter topics based on search query
  const filteredTopics = topics.filter((topic) =>
    topic.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 transition-colors duration-700">
      <div className="max-w-7xl mx-auto mt-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Forums
          </h1>
          <Link
            href="/forums/new"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            New Topic
          </Link>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={topic.img}
                  alt={topic.text}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-2">
                  {topic.text}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {topic.desc}
                </p>
                <div className="mt-4 text-center">
                <Button variant="outline">
                  <Link
                    href={`/forum/${topic.text.toLowerCase()}`}
                    // target="_blank"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    Explore Topic
                  </Link>
                </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600 dark:text-gray-300">
              No topics found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Forums;