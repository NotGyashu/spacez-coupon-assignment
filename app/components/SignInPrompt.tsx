'use client';

import { useRouter } from 'next/navigation';

export default function SignInPrompt() {
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/signIn');
  };

  return (
    <div className="bg-white  px-4 sm:px-6">
      {/* Offers Heading */}
      <h2 className="text-[22px] sm:text-[28px] font-bold text-[#4B4E4B] mb-3 sm:mb-4 leading-tight">
        Offers
      </h2>

      {/* Description Text */}
      <p className="text-[13px] sm:text-[15px] text-[#4B4E4B] mb-4 sm:mb-5 leading-relaxed">
        Sign in to unlock exclusive additional rewards
      </p>

      {/* Sign In Button */}
      <button
        onClick={handleSignIn}
        className="w-full bg-[#C16B3E] hover:bg-[#B66543] active:bg-[#A55A32] text-white text-[14px] sm:text-[16px] font-medium py-3 sm:py-[14px] px-4 sm:px-6 transition-colors duration-200 shadow-sm"
      >
        Sign in
      </button>
    </div>
  );
}
