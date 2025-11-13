'use client';

import { useState } from 'react';

interface TabNavigationProps {
  onTabChange: (tab: string) => void;
}

export default function TabNavigation({ onTabChange }: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState('Coupons');

  const tabs = ['Coupons', 'Giftcards', 'Payment Offers'];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="flex border-b border-gray-200 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className="flex-1 py-3 text-sm font-medium transition-colors relative"
        >
          <span
            className={`relative ${
              activeTab === tab
                ? 'text-[#4B4E4B] font-bold'
                : 'text-[#9CA3AF] hover:text-[#4B4E4B]'
            }`}
          >
            {tab}
            {/* Underline only under text */}
            {activeTab === tab && (
              <span className="absolute bottom-[-13px] left-0 right-0 h-[2px] bg-[#4B4E4B]" />
            )}
          </span>
        </button>
      ))}
    </div>
  );
}
