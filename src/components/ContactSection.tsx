'use client';

import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-transparent text-white">
      <h2 className="text-3xl sm:text-4xl font-sora font-bold text-center mb-10">Get in Touch</h2>

      <div className="max-w-2xl mx-auto text-center space-y-6">
        <p className="text-gray-300 font-inter text-lg">
          Whether it's building robust banking services or collaborating on something cool — feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 mt-8 flex-wrap">
          <a
            href="mailto:swapniljadav@yahoo.com"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <Mail className="w-5 h-5" />
            swapniljadav@yahoo.com
          </a>

          <a
            href="tel:+917738908000"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <Phone className="w-5 h-5" />
            +91-7738908000
          </a>

          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Hyderabad, India
          </div>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-6 mt-8 text-gray-400">
          <a
            href="https://www.facebook.com/swapniljadav"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition flex items-center gap-2"
          >
            <Facebook className="w-5 h-5" />
            Facebook
          </a>

          <a
            href="https://www.instagram.com/swapniljadav"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition flex items-center gap-2"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>

          <a
            href="https://twitter.com/swapniljadav"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition flex items-center gap-2"
          >
            <Twitter className="w-5 h-5" />
            Twitter/X
          </a>
        </div>
      </div>
    </section>
  );
}
