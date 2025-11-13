import Image from 'next/image';

interface PaymentOfferData {
  giftCardImage: string; // ✅ Changed from paymentCardImage
  maxAmount: string;
  brandsText: string;
}

interface PaymentOfferProps {
  data?: PaymentOfferData;
}

export default function PaymentOfferCard({ 
  data
}: PaymentOfferProps) {
  return (
    <div className="bg-white">
      {/* Heading */}
      <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#4B4E4B] mb-3 sm:mb-4 md:mb-5">
        Payment Offers:
      </h3>

      {/* Content Card */}
      <div className="flex flex-row gap-3 sm:gap-4 bg-[#FDF9F7] justify-between items-center p-3 sm:p-4 mb-4 sm:mb-5 md:mb-6">
        
        {/* Voucher Text */}
        <div className="flex-1 w-full sm:w-auto">
          <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#4B4E4B] mb-2 sm:mb-3">
            Save more on your bookings
          </p>
          <div className="flex items-baseline gap-2 mb-1 sm:mb-2">
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#874B2C] leading-none">
              Upto 15% Off
            </h2>
          </div>
          <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#874B2C]">
            on select payment methods
          </p>
        </div>

        {/* Image Container */}
        <div className="rounded-xl bg-[#C16B3E1A] p-1 overflow-visible flex-shrink-0">
          <Image
            src={data?.giftCardImage || '/paymentOffer.svg'} // ✅ Changed from paymentCardImage
            alt="Payment offer"
            width={100}
            height={80}
            className="object-contain sm:w-[110px] sm:h-[90px] md:w-[120px] md:h-[100px] -m-3"
            priority
          />
        </div>
      </div>

      {/* Unlock Button */}
      <button className="w-full bg-[#C16B3E] hover:bg-[#A85A32] active:bg-[#924D28] text-white text-[13px] sm:text-[14px] md:text-[15px] font-medium py-2.5 sm:py-3 md:py-3.5 px-4 sm:px-5 md:px-6  transition-colors flex items-center justify-center gap-2 shadow-sm">
        Unlock Payment
        <span className="text-[16px] sm:text-[17px] md:text-[18px] font-bold">»</span>
      </button>
    </div>
  );
}
