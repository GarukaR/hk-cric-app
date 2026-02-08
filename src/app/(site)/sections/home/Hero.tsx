export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">🏏 Hong Kong Cricket</h1>
        <p className="text-xl text-blue-100 mb-8">
          Live scores, news, and updates
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded font-bold hover:bg-blue-50">
            Watch Live
          </button>
          <button className="bg-blue-700 text-white px-8 py-3 rounded font-bold hover:bg-blue-900">
            View Fixtures
          </button>
        </div>
      </div>
    </div>
  );
}
