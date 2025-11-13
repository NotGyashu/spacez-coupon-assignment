'use client';

import { useState } from 'react';
import SignInPrompt from '../components/SignInPrompt';
import TabNavigation from '../components/TabNavigation';
import CouponCard from '../components/CouponCard';
import GiftCardPlaceholder from '../components/GiftCard';
import PaymentOfferCard from '../components/PaymentOfferCard';

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

export default function SignOutPage() {
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
          <div className="p-4">
            <GiftCardPlaceholder 
              data={{
                giftCardImage: '/Group.svg',
                maxAmount: '₹1000',
                brandsText: 'of trending brands'
              }}
            />
          </div>
        );
      
      case 'Payment Offers':
        return (
          <div className="p-4">
            <PaymentOfferCard 
              data={{
                giftCardImage: '/paymentOffer.svg',
                maxAmount: '₹1000',
                brandsText: 'of trending brands'
              }}
            />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Sign In Prompt - Fixed at top of scrollable area */}
      <div className="flex-shrink-0 px-4 pt-4">
        <SignInPrompt />
      </div>

      {/* Tabs - Sticky */}
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
