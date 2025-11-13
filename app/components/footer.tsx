'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Footer() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('Offers');
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState('');

  const navItems = [
    { name: 'Explore', path: '/', icon: '/Explore.svg' },
    { name: 'Offers', path: '/offers', icon: '/offers.svg' },
    { name: 'Bookings', path: '/bookings', icon: '/Bookings.svg' },
    { name: 'Wishlist', path: '/wishlist', icon: '/Wishlist.svg' },
    { name: 'Profile', path: '/profile', icon: '/Profile.svg' }
  ];

  const handleNavigation = (name: string) => {
    setActiveTab(name);
    
    // Show success message
    setMessageText(`${name} clicked successfully! No other Screen to Show!`);
    setShowMessage(true);
    
    // Hide message after 2 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <>
     {/* Success Message Toast */}
{activeTab !== "Offers" && showMessage && (
  <div
    className={`fixed top-20 left-1/2 -translate-x-1/2 z-[60] transition-all duration-300 ${
      showMessage 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 -translate-y-4 pointer-events-none'
    }`}
  >
    <div className="bg-[#C16B3E] text-white px-6 py-3 rounded-lg shadow-xl">
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span className="font-medium">{messageText}</span>
      </div>
    </div>
  </div>
)}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="max-w-screen-xl mx-auto px-2">
          <div className="flex items-center justify-around ">
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.name)}
                  className="flex flex-col items-center justify-center gap-1 py-2 px-3 min-w-[60px] transition-all active:scale-95 hover:bg-gray-50 rounded-lg"
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={24}
                      height={24}
                      className="object-contain"
                      style={{
                        filter: isActive 
                          ? 'brightness(0) saturate(100%) invert(36%) sepia(23%) saturate(1689%) hue-rotate(345deg) brightness(93%) contrast(86%)' 
                          : 'brightness(0) saturate(100%) invert(50%) sepia(8%) saturate(337%) hue-rotate(173deg) brightness(92%) contrast(86%)'
                      }}
                    />
                  </div>
                  
                  {/* Label */}
                  <span
                    className={`text-xs font-medium transition-colors ${
                      isActive ? 'text-[#C16B3E]' : 'text-gray-500'
                    }`}
                  >
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
