export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white px-6"
      style={{
        backgroundImage: "url('https://files.catbox.moe/4eog92.jpg')",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <img
          src="https://files.catbox.moe/rpq0fx.jpg"
          alt="Logo"
          className="w-28 h-28 rounded-full shadow-lg mb-6"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-2 animate-pulse drop-shadow">
          Welcome to Beyond Store 🌀
        </h1>
        <p className="text-lg text-gray-200 mb-6 max-w-xl">
          Buy premium bots, admin panels, accounts, websites & more. We deliver instantly and securely.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/register" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl shadow">
            Register
          </a>
          <a href="/products" className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-xl shadow">
            Products
          </a>
          <a href="/support" className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-xl shadow">
            Support
          </a>
          <a href="/contact" className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-xl shadow">
            Contact
          </a>
        </div>

        <p className="text-sm text-gray-300 mt-10">Made with ❤️ by Beyond</p>
      </div>
    </div>
  );
            }
