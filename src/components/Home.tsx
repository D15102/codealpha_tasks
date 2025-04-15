import React from 'react'
import { Github, Linkedin , Instagram } from "lucide-react";
import Spline from "@splinetool/react-spline";
const Home = () => {
  return (
    <div className="min-h-screen container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Web App Developer
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Crafting digital experiences with modern web technologies.
              Passionate about creating elegant solutions to complex problems.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/D15102"
                className="hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/surti-dharmik-359a03349/"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/surtidharmik/"
                className="hover:text-blue-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div className="w-full h-[35rem]">
            <Spline
              scene="https://prod.spline.design/djvZoiUTX2iPDWbc/scene.splinecode"
              className="w-full  mt-10 rounded-lg shadow-md shadow-emerald-400"
            />
          </div>
        </div>
      </div>
  )
}

export default Home
