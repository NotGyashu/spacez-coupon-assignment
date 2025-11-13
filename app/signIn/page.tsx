'use client';

import { useState } from 'react';
import TabNavigation from '../components/TabNavigation';
import CouponCard from '../components/CouponCard';

const couponsData = [
  {
    id: '1',
    title: 'LONGSTAY',
    price: '₹1,500',
    description: '15% off when you book for 5 days or more and 20% off when you book for 30 days or more.',
    code: 'LONGSTAY',
    backgroundColor: '#C16B3E'
  },
  {
    id: '2',
    title: 'EARLYBIRD',
    price: '₹3,000',
    description: '15% off when you book for 5 days or more and 20% off when you book for 30 days or more.',
    code: 'EARLYBIRD',
    backgroundColor: '#C16B3E'
  },
  {
    id: '3',
    title: 'RUSHDEAL',
    price: 'Flat 10%',
    description: '15% off when you book for 5 days or more and 20% off when you book for 30 days or more.',
    code: 'RUSHDEAL',
    backgroundColor: '#C16B3E'
  }
];

const GiftData = [
  {
    id: '1',
    logo: '/image.svg',
    title: 'MYNTRA',
    price: '₹1,500',
    description: 'Get this Voucher on booking above ₹2000',
    code: 'AMAZON500',
    backgroundColor: '#D41C9B'
  },
  {
    id: '2',
    logo: '/Hammer.svg',
    title: 'HAMMER',
    price: '₹1,500',
    description: 'Get Voucher booking above ₹1500',
    code: 'FLIPKART',
    backgroundColor: '#000000'
  }
];

const PaymentData = [
  {
    id: '1',
    logo: '/HDFC.svg',
    title: 'HDFC BANK',
    price: '10% OFF',
    description: 'Get 10% off on booking above ₹1500',
    code: 'UPI10',
    backgroundColor: '#3168CF'
  }
];

export default function SignInPage() {
  const [activeTab, setActiveTab] = useState('Coupons');

  const renderContent = () => {
    switch (activeTab) {
      case 'Coupons':
        return (
          <div className="space-y-4 p-4">
            <h2 className="text-lg font-bold text-[#4B4E4B]">Sitewide coupons:</h2>
            {couponsData.map((coupon) => (
              <CouponCard
                key={coupon.id}
                title={coupon.title}
                price={coupon.price}
                description={coupon.description}
                code={coupon.code}
                backgroundColor={coupon.backgroundColor}
                type="coupon"
              />
            ))}
          </div>
        );
      
      case 'Giftcards':
        return (
          <div className="space-y-4 p-4">
            <h2 className="text-lg font-bold text-[#4B4E4B]">Gift cards:</h2>
            {GiftData.map((gift) => (
              <CouponCard
                key={gift.id}
                title={gift.title}
                price={gift.price}
                description={gift.description}
                code={gift.code}
                backgroundColor={gift.backgroundColor}
                logo={gift.logo}
                type="gift"
              />
            ))}
          </div>
        );
      
      case 'Payment Offers':
        return (
          <div className="space-y-4 p-4">
            <h2 className="text-lg font-bold text-[#4B4E4B]">Payment offers:</h2>
            {PaymentData.map((payment) => (
              <CouponCard
                key={payment.id}
                title={payment.title}
                price={payment.price}
                description={payment.description}
                code={payment.code}
                backgroundColor={payment.backgroundColor}
                logo={payment.logo}
                type="payment"
              />
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Offers Header - Fixed at top */}
      <div className="flex-shrink-0 p-4 sm:p-6">
        <h2 className="text-[22px] sm:text-[28px] font-bold text-[#4B4E4B] mb-3 sm:mb-4 leading-tight">
          Offers
        </h2>
        <p className="text-[13px] sm:text-[15px] text-[#4B4E4B] leading-relaxed">
          Book directly with us to unlock exclusive benefits
        </p>
      </div>

      {/* Tab Navigation - Sticky */}
      <div className="flex-shrink-0 sticky top-0 z-10 bg-white px-4">
        <TabNavigation onTabChange={setActiveTab} />
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
}
