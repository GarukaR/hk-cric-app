"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 px-4">
      <div className="container mx-auto flex flex-col text-center justify-between items-center md:items-start md:flex-col md:text-left gap-4">
        <div className="text-xs text-gray-400">
          <p>
            hku.cricket.hk is a production of Digital Media - a division of HKU.
          </p>
          <p>2026 Hong Kong University Cricket.</p>
          <p>All rights reserved.</p>
        </div>
        <div>
          <a href="https://www.facebook.com/hkucricket">Facebook</a>
          <span className="border-l border-gray-600 h-6 mx-4"></span>
          <a href="https://www.instagram.com/hkucricket">Instagram</a>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-2 text-xs">
          <a href="/">Privacy Policy</a>
          <a href="/live">Collection Statement</a>
          <a href="/news">Terms and Conditions</a>
          <a href="/videos">Advertise</a>
          <a href="/fixtures">Contact Us</a>
          <a href="/teams">Feedback</a>
        </div>
      </div>
    </footer>
  );
}
