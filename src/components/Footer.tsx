'use client';

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/10 text-gray-400 py-4 px-4 text-center text-xs sm:text-sm font-inter">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <p>
          © {new Date().getFullYear()} Swapnil Jadav. Built with 💻 & ☕ using Next.js + Tailwind.
        </p>
        <p>
          Hosted on Vercel • All rights reserved
        </p>
      </div>
    </footer>
  );
}
