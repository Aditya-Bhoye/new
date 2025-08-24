import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-samsung-gray dark:bg-samsung-dark-gray text-gray-700 dark:text-gray-300 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Column 1 */}
        <div>
          <h4 className="font-bold mb-4">Shop</h4>
          <ul>
            <li>
              <a href="#" className="hover:text-samsung-blue">
                Smartphones
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-samsung-blue">
                Tablets
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-samsung-blue">
                Wearables
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-samsung-blue">
                TV & Audio
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
