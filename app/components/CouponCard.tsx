'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CouponCardProps {
  title: string;
  price: string;
  description: string;
  code?: string;
  backgroundColor?: string;
  logo?: string;
  type?: 'coupon' | 'gift' | 'payment'; // ✅ Add type prop
}

export default function CouponCard({
  title,
  price,
  description,
  code,
  backgroundColor = '#C16B3E',
  logo,
  type = 'coupon' // ✅ Default to coupon
}: CouponCardProps) {
  const [copied, setCopied] = useState(false);
  const [collected, setCollected] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleAction = () => {
    if (type === 'coupon') {
      // Copy action for coupons
      if (code) {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } else {
      // Collect action for gifts and payments
      setCollected(true);
      setTimeout(() => setCollected(false), 2000);
    }
  };

  // Determine button text based on type
  const getButtonText = () => {
    if (type === 'coupon') {
      return copied ? 'Copied!' : 'Copy';
    } else {
      return collected ? 'Collected!' : 'Collect';
    }
  };

  // Generate alternating zigzag pattern
  const zigzagCount = 12;
  const zigzags = Array.from({ length: zigzagCount }, (_, i) => ({
    color: i % 2 === 0 ? '#FDF9F7' : backgroundColor,
    top: i * 15
  }));

  return (
    <div className="bg-white overflow-hidden flex shadow-md">
      {/* Left Price Section with Zigzag Edge */}
      <div className="relative flex">
        {/* Main colored section */}
        <div
          className="w-[72px] flex flex-col items-center justify-center text-white font-bold"
          style={{ backgroundColor }}
        >
          {/* Price - Rotated Vertically */}
          <div className="text-[24px] font-bold rotate-[-90deg] whitespace-nowrap tracking-wide">
            {price}
          </div>
        </div>

        {/* Zigzag edge - vertical rectangles */}
        <div className="absolute right-0 top-0 bottom-0 w-[2px] flex flex-col">
          {zigzags.map((zigzag, index) => (
            <div
              key={index}
              className="w-[2px]"
              style={{
                backgroundColor: zigzag.color,
                height: '15px'
              }}
            />
          ))}
        </div>
      </div>

      {/* Right Content Section */}
      <div className="flex-1 p-5 bg-[#FDF9F7]">
        {/* Header with Logo (if exists), Title and Action Button */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3 flex-1">
            {/* Logo - only show if exists */}
            {logo && (
              <div className="flex-shrink-0">
                <Image
                  src={logo}
                  alt={title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            )}
            
            {/* Title */}
            <h3 className="text-[18px] font-bold text-[#3D3D3D] tracking-normal">
              {title}
            </h3>
          </div>

          {/* Action Button (Copy or Collect) */}
          <button
            onClick={handleAction}
            className="flex items-center gap-1.5 text-[14px] font-bold transition-colors ml-3 flex-shrink-0"
            style={{ color: backgroundColor }}
          >
            {type === 'coupon' && (
              // Copy icon for coupons
              <svg
                className="w-[18px] h-[18px]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            )}
            <span className="font-bold text-[#C16B3E]">{getButtonText()}</span>
          </button>
        </div>

        {/* Description */}
        <p className="text-[14px] text-[#7A7A7A] leading-[1.6] mb-3">
          {showMore ? description : `${description.substring(0, 85)}${description.length > 85 ? '...' : ''}`}
        </p>

        {/* Divider */}
        <hr className="border-gray-300 mb-3" />

        {/* Read More Button */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-[14px] text-[#8A8A8A] hover:text-[#6A6A6A] font-medium"
        >
          {showMore ? 'Show less' : 'Read more'}
        </button>
      </div>
    </div>
  );
}
