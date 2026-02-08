'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <p className="text-gray-400">Hong Kong Cricket App</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#">Live Scores</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Videos</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Social</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 HK Cricket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
