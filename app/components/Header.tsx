import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 md:px-8 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.svg"           // ✅ Correct: Just /filename
            alt="Spacez Logo"
            width={120}
            height={32}
            className="h-8 w-auto sm:h-10"
            priority
          />
        </div>

        {/* Menu Icon */}
        <button
          className="flex items-center justify-center p-2 rounded-md hover:bg-gray-100 transition-colors active:scale-95"
          aria-label="Open menu"
        >
          <Image
            src="/menu.svg"           // ✅ Correct: Just /filename
            alt="Menu"
            width={24}
            height={24}
            className="h-6 w-6 sm:h-7 sm:w-7"
          />
        </button>
      </div>
    </header>
  );
}
