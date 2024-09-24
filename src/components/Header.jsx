import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.jpeg"
const Header = () => {
  return (
    <div className="h-screen flex flex-col">
    <div className="bg-gray-100 py-4 md:py-6 lg:py-8">
      <img src={logo} width={100} className="mx-auto mb-4" />
      <p className="text-center text-xl md:text-2xl lg:text-3xl font-bold">Erudite Kids Maths and Coding Club</p>
    </div>
    <nav className="bg-gray-800 text-white py-4 md:py-6 lg:py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <ul className="flex justify-center md:justify-start">
          <li className="mr-6 md:mr-12 lg:mr-16">
            <NavLink
              to="/program-for-kids"
              className="text-lg md:text-xl lg:text-2xl hover:text-gray-300"
            >
              Program for Kids
            </NavLink>
          </li>
          <li className="mr-6 md:mr-12 lg:mr-16">
            <NavLink
              to="/stem-subjects"
              className="text-lg md:text-xl lg:text-2xl hover:text-gray-300"
            >
              STEM Subjects
            </NavLink>
          </li>
          <li className="mr-6 md:mr-12 lg:mr-16">
            <NavLink
              to="/support-resources"
              className="text-lg md:text-xl lg:text-2xl hover:text-gray-300"
            >
              Support/Resources
            </NavLink>
          </li>
          <li className="mr-6 md:mr-12 lg:mr-16">
            <NavLink
              to="/our-story"
              className="text-lg md:text-xl lg:text-2xl hover:text-gray-300"
            >
              Our Story
            </NavLink>
          </li>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Enquire
          </button>
        </ul>
      </div>
    </nav>
  </div>
  
  )
}

export default Header