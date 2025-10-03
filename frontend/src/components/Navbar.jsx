import React, { useState, useEffect, useRef } from 'react'

const services = [
  'Online Education',
  'Distance Education',
  'Regular Full-time Education',
  'BVoc',
  'Diploma & PG',
  'Certificate & Skill Courses',
  'MBBS India',
  'MBBS Abroad',
  'BE/BTech Admission',
  'MBA Admission',
  'Study Abroad',
  'Immigration & Visa Services',
  'Attestation & Apostille',
  'Online & Home Tuitions',
  'Business Opportunities'
]

const NavItem = ({ children, href = '#' }) => (
  <a href={href} className="px-3 py-2 text-[15px] md:text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
    {children}
  </a>
)

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [servicesOpenDesktop, setServicesOpenDesktop] = useState(false)
  const servicesRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpenDesktop(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="relative bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center">
            <NavItem>Home</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Career Guidance</NavItem>

            {/* Services with dropdown (click to open; closes on outside click) */}
            <div className="relative" ref={servicesRef}>
              <button
                className="px-3 py-2 text-[15px] md:text-base font-medium text-gray-700 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                onClick={() => setServicesOpenDesktop((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={servicesOpenDesktop}
              >
                Services
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"/></svg>
              </button>
              {servicesOpenDesktop && (
                <div className="absolute left-0 mt-2 w-72 bg-white border border-gray-200 rounded-md shadow-lg">
                  <ul className="py-2 max-h-[70vh] overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    {services.map((s) => (
                      <li key={s}>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">{s}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <NavItem>Events</NavItem>
            <NavItem>Blog / Resources</NavItem>
            <NavItem>Testimonials</NavItem>
            <NavItem>FAQs</NavItem>
            <NavItem>Contact Us</NavItem>
          </div>

          

          {/* Mobile hamburger (three-line icon) */}
          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.5 6h17M3.5 12h17M3.5 18h17"/></svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (opens directly under hamburger) */}
      {mobileOpen && (
        <div className="lg:hidden">
          {/* Click-away overlay */}
          <div className="fixed inset-0" onClick={() => setMobileOpen(false)} />
          {/* Dropdown panel anchored under hamburger */}
          <div className="absolute left-4 top-14 w-72 max-w-[85vw] bg-white shadow-xl border border-gray-200 rounded-md z-50">
            <div className="px-4 py-3 space-y-1 overflow-y-auto">
              <a href="#" onClick={() => setMobileOpen(false)} className="block w-full px-3 py-3 text-[15px] font-medium text-gray-800 rounded-md hover:bg-gray-100">Home</a>
              <a href="#" onClick={() => setMobileOpen(false)} className="block w-full px-3 py-3 text-[15px] font-medium text-gray-800 rounded-md hover:bg-gray-100">About Us</a>
              <a href="#" onClick={() => setMobileOpen(false)} className="block w-full px-3 py-3 text-[15px] font-medium text-gray-800 rounded-md hover:bg-gray-100">Career Guidance</a>

            {/* Services accordion */}
            <button
              className="w-full flex items-center justify-between px-3 py-2 text-[15px] md:text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setServicesOpen((v) => !v)}
            >
              <span>Services</span>
              <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"/></svg>
            </button>
            {servicesOpen && (
              <ul className="ml-3 mb-2 max-h-[60vh] overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {services.map((s) => (
                  <li key={s}>
                    <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600" onClick={() => setMobileOpen(false)}>{s}</a>
                  </li>
                ))}
              </ul>
            )}

              <a href="#" onClick={() => setMobileOpen(false)} className="block w-full px-3 py-3 text-[15px] font-medium text-gray-800 rounded-md hover:bg-gray-100">Events</a>
              <a href="#" onClick={() => setMobileOpen(false)} className="block w-full px-3 py-3 text-[15px] font-medium text-gray-800 rounded-md hover:bg-gray-100">Blog / Resources</a>
              <a href="#" onClick={() => setMobileOpen(false)} className="block w-full px-3 py-3 text-[15px] font-medium text-gray-800 rounded-md hover:bg-gray-100">Testimonials</a>
              <a href="#" onClick={() => setMobileOpen(false)} className="block w-full px-3 py-3 text-[15px] font-medium text-gray-800 rounded-md hover:bg-gray-100">FAQs</a>
              <a href="#" onClick={() => setMobileOpen(false)} className="block w-full px-3 py-3 text-[15px] font-medium text-gray-800 rounded-md hover:bg-gray-100">Contact Us</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar


