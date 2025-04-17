'use client';

import { Mail, MapPin, Phone, Facebook, Instagram, Twitter, ChevronUp } from 'lucide-react';

export default function ContactSection() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section id="contact" className="py-24 px-6 bg-transparent text-white text-center">
      <h2 className="text-3xl sm:text-4xl font-sora font-bold mb-10">Get in Touch</h2>

      <p className="text-gray-300 font-inter text-lg max-w-xl mx-auto">
        Whether it's building scalable systems or collaborating on something exciting — feel free to reach out!
      </p>

      {/* Contact Details */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 text-gray-400">
        <a href="mailto:swapniljadav@yahoo.com" className="flex items-center gap-2 hover:text-white transition">
          <Mail className="w-5 h-5" />
          swapniljadav@yahoo.com
        </a>
        <a href="tel:+917738908000" className="flex items-center gap-2 hover:text-white transition">
          <Phone className="w-5 h-5" />
          +91-7738908000
        </a>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Hyderabad, India
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-gray-400 mt-10">
        <a href="https://www.facebook.com/swapniljadav" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="https://www.instagram.com/swapniljadav" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="https://twitter.com/swapniljadav" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          <Twitter className="w-5 h-5" />
        </a>
      </div>

      {/* Back to Top Button */}
      <div className="mt-12">
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center mx-auto gap-2 text-sm text-gray-400 hover:text-white transition"
        >
          <ChevronUp className="w-4 h-4" />
          Back to Top
        </button>
      </div>
    </section>
  );
}
