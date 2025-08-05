import { useEffect } from 'react';
import { useRouter } from 'next/router';

const products = [
  { name: 'Bot Files', price: 700 },
  { name: 'Bot Access (rem)', price: 1000 },
  { name: 'Panel', price: 2500 },
  { name: 'Admin Panel', price: 5000 },
  { name: 'Telegram Account', price: 7800 },
  { name: 'Website Files', price: 1300 },
  { name: 'Custom Website', price: 2500 },
];

export default function Products() {
  const router = useRouter();

  useEffect(() => {
    const isRegistered = localStorage.getItem('registered');
    if (!isRegistered) router.push('/register');
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">🛍️ Our Products</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur shadow-md text-center"
          >
            <h2 className="text-xl font-bold">{p.name}</h2>
            <p className="text-gray-300 mb-4">₦{p.price.toLocaleString()}</p>
            <a
              href="https://t.me/deekingbeyond"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-md inline-block"
            >
              Pay & DM
            </a>
          </div>
        ))}
      </div>
    </div>
  );
    }
