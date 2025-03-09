import React from 'react'
import { resourcesLinks, contactLinks, developmentLinks } from  '../constants'

function Footer() {
  return (
    <footer className='mt-20 border-t py-10 border-neutral-700 '>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
            <div>
            <h3 className='text-md font-semibold mb-4 '>Resources</h3>
            <ul className='space-y-2 '>
                {resourcesLinks.map((link, index)=>(
                    <li key={index}>
                        <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
            </div> 
            <div>
            <h3 className='text-md font-semibold mb-4'>Contact us</h3>
            <ul className='space-y-2 '>
  {contactLinks.map((link, index) => (
    <li key={index} className="flex items-center space-x-2">
      {link.icon} {/* Icon */}
      <a
        className="text-neutral-300 hover:text-white no-underline decoration-none"
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.text} {/* Text */}
      </a>
    </li>
  ))}
</ul>
            </div>
            <div>
            <h3 className='text-md font-semibold mb-4 '>Developments</h3>
            <ul className='space-y-2 '>
  {developmentLinks.map((link, index) => (
    <li key={index} className="flex items-center space-x-2">
      {link.icon} {/* Icon */}
      <a
        className="text-neutral-300 hover:text-white no-underline decoration-none"
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.text} {/* Text */}
      </a>
    </li>
  ))}
</ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer