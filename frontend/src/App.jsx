import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import ServicesSidebar from './components/ServicesSidebar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Header />
      <Navbar />
      <main className="w-full px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          {/* Services Sidebar */}
          <div className="lg:w-1/3">
            <ServicesSidebar />
          </div>
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome to Dynamic World
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Your trusted partner for career guidance and professional development
              </p>
              <div className="bg-white rounded-lg shadow-md p-8 w-full">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Get Started Today
                </h2>
                <p className="text-gray-600 mb-6">
                  Connect with our career guidance experts to unlock your professional potential.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200">
                    Start Your Journey
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
