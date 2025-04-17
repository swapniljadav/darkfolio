'use client';

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/10 text-gray-400 text-center text-xs sm:text-sm font-inter px-4 pt-6 pb-2">
      <div className="max-w-4xl mx-auto space-y-2">
        <p>
          © {new Date().getFullYear()} Swapnil Jadav. Built with 💻 & ☕ using Next.js + Tailwind.
        </p>
        <p>Hosted on Vercel • All rights reserved</p>
      </div>
    </footer>
  );
}
