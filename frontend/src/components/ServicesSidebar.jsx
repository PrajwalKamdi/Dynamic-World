import React, { useState } from 'react'

const ServicesSidebar = () => {
  const [activeItem, setActiveItem] = useState('Online Education')

  const services = [
    { id: 'Online Education', text: 'Online Education' },
    { id: 'Distance Education', text: 'Distance Education' },
    { id: 'Regular Full-time Education', text: 'Regular Full-time Education' },
    { id: 'BVoc', text: 'BVoc' },
    { id: 'Diploma & PG', text: 'Diploma & PG' },
    { id: 'Certificate & Skill Courses', text: 'Certificate & Skill Courses' },
    { id: 'MBBS India', text: 'MBBS India' },
    { id: 'MBBS Abroad', text: 'MBBS Abroad' },
    { id: 'BE/BTech Admission', text: 'BE/BTech Admission' },
    { id: 'MBA Admission', text: 'MBA Admission' },
    { id: 'Study Abroad', text: 'Study Abroad' },
    { id: 'Immigration & Visa Services', text: 'Immigration & Visa Services' },
    { id: 'Attestation & Apostille', text: 'Attestation & Apostille' },
    { id: 'Online & Home Tuitions', text: 'Online & Home Tuitions' },
    { id: 'Business Opportunities', text: 'Business Opportunities' }
  ]

  const renderIcon = (id) => {
    const iconProps = { className: 'w-5 h-5 md:w-6 md:h-6', fill: 'currentColor', viewBox: '0 0 20 20' }
    switch (id) {
      case 'Online Education':
        return (
          <svg {...iconProps}><path d="M4 3a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v6H4V5zm3 9h6a3 3 0 01-6 0z"/></svg>
        )
      case 'Distance Education':
        return (
          <svg {...iconProps}><path d="M4 4h12v2H4V4zm0 4h12v2H4V8zm0 4h8v2H4v-2z"/></svg>
        )
      case 'Regular Full-time Education':
        return (
          <svg {...iconProps}><path d="M10 2L1 6l9 4 9-4-9-4zm-7 7v5l7 3 7-3V9l-7 3-7-3z"/></svg>
        )
      case 'BVoc':
        return (
          <svg {...iconProps}><path d="M10 15l-4.755 2.5.91-5.305L2.31 8.5l5.32-.773L10 3l2.37 4.727 5.32.773-3.845 3.695.91 5.305L10 15z"/></svg>
        )
      case 'Diploma & PG':
        return (
          <svg {...iconProps}><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L10 10l7.394-3.08a1 1 0 000-1.84l-7-3zM3 11l7 3 7-3v4l-7 3-7-3v-4z"/></svg>
        )
      case 'Certificate & Skill Courses':
        return (
          <svg {...iconProps}><path d="M4 3h12a1 1 0 011 1v10a1 1 0 01-1 1h-3l-3 2-3-2H4a1 1 0 01-1-1V4a1 1 0 011-1zm2 3v2h8V6H6z"/></svg>
        )
      case 'MBBS India':
        return (
          <svg {...iconProps}><path d="M10 2a4 4 0 00-4 4v2H5a3 3 0 100 6h10a3 3 0 100-6h-1V6a4 4 0 00-4-4z"/></svg>
        )
      case 'MBBS Abroad':
        return (
          <svg {...iconProps}><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2c1.657 0 3 2.239 3 6s-1.343 6-3 6-3-2.239-3-6 1.343-6 3-6z"/></svg>
        )
      case 'BE/BTech Admission':
        return (
          <svg {...iconProps}><path d="M13.828 4.172a4 4 0 010 5.656l-1.172 1.172-3.656-3.656 1.172-1.172a4 4 0 015.656 0zM2 12l4 4H2v-4zm6.586-3.414l3.656 3.656L9 16H6l2.586-7.414z"/></svg>
        )
      case 'MBA Admission':
        return (
          <svg {...iconProps}><path d="M3 6a2 2 0 012-2h10a2 2 0 012 2v8l-7-3-7 3V6z"/></svg>
        )
      case 'Study Abroad':
        return (
          <svg {...iconProps}><path d="M2 10l8-8 8 8-3 0-5-5-5 5H2zm2 2h12v4H4v-4z"/></svg>
        )
      case 'Immigration & Visa Services':
        return (
          <svg {...iconProps}><path d="M4 3h12v2H4V3zm0 4h12v10H4V7zm2 2v6h8V9H6z"/></svg>
        )
      case 'Attestation & Apostille':
        return (
          <svg {...iconProps}><path d="M5 2h8l3 3v11a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2zm1 4h6v2H6V6zm0 4h6v2H6v-2z"/></svg>
        )
      case 'Online & Home Tuitions':
        return (
          <svg {...iconProps}><path d="M3 4h14v8H3V4zm0 10h6v2H3v-2zm10 0h4v2h-4v-2z"/></svg>
        )
      case 'Business Opportunities':
        return (
          <svg {...iconProps}><path d="M4 6h4l2 3 2-3h4v10H4V6zm2 2v6h8V8h-2l-2 3-2-3H6z"/></svg>
        )
      default:
        return <svg {...iconProps}><circle cx="10" cy="10" r="3" /></svg>
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-80">
      {/* Title */}
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        Our Services
      </h2>

      {/* Services List */}
      <div className="space-y-2">
        {services.map((service) => (
          <div
            key={service.id}
            className={`group flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
              activeItem === service.id
                ? 'bg-blue-600 text-white transform translate-x-2'
                : 'text-gray-700 hover:bg-blue-600 hover:text-white hover:transform hover:translate-x-2'
            }`}
            onClick={() => setActiveItem(service.id)}
            onMouseEnter={() => setActiveItem(service.id)}
          >
            {/* Icon (monochrome - inherits text color) */}
            <span className={`${activeItem === service.id ? 'text-white' : 'text-gray-900'} group-hover:text-white`}>
              {renderIcon(service.id)}
            </span>

            {/* Text */}
            <span className="font-medium">
              {service.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesSidebar
