import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      localStorage.setItem('registered', 'true');
      router.push('/products');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 flex flex-col items-center justify-center text-white px-6">
      <h1 className="text-3xl font-bold mb-4">Register to Access Store</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-10 p-6 rounded-xl w-full max-w-md shadow-lg space-y-4"
      >
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
        >
          Register
        </button>
      </form>
    </div>
  );
            }
