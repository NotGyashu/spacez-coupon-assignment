import Image from 'next/image';

interface GiftCardData {
  giftCardImage: string;
  maxAmount: string;
  brandsText: string;
}

interface GiftCardPlaceholderProps {
  data?: GiftCardData;
}

export default function GiftCardPlaceholder({ 
  data = {
    giftCardImage: '/gift-cards.png', // Your combined overlapping cards image
    maxAmount: '₹1000',
    brandsText: 'of trending brands'
  }
}: GiftCardPlaceholderProps) {
  return (
    <div className="bg-white ">
      {/* Heading */}
      <h3 className="text-[20px] font-bold text-[#4B4E4B] mb-5">
        Bonus gift cards:
      </h3>

     <div className="flex flex-row gap-4 bg-[#FDF9F7] justify-between items-center mb-6">
       
        {/* Voucher Text */}
      <div className="mb-5 px-4 overflow-visible">
        <p className="text-[15px] text-[#874B2C] font-semibold mb-1">
          Assured vouchers up to
        </p>
        <div className="flex items-baseline gap-2 mb-1">
          <h2 className="text-[32px] font-bold text-[#874B2C] leading-none">
            {data.maxAmount} ✨
          </h2>
          
        </div>
        <p className="text-[14px] text-[#7A7A7A]">
          {data.brandsText}
        </p>
      </div>

       <Image
          src={data.giftCardImage}
          alt="Gift cards"
          width={150}
          height={75}
          className="object-contain m-[-4]"
          priority
        />
      </div>

      

      {/* Claim Button */}
      <button className="w-full bg-[#C16B3E] hover:bg-[#A85A32] text-white text-[15px]  py-3.5 px-6 transition-colors flex items-center justify-center gap-2 shadow-sm">
        Claim gift cards
        <span className="text-[18px] font-bold">»</span>
      </button>
    </div>
  );
}
