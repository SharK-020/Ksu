import React, { FormEvent, useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // TODO: Add login logic here
    console.log('Login submitted:', email, password);
  };

  return (
    <div className="container flex flex-col items-center 
    mx-auto p-4 pt-14 space-y-10">
      <h2 className="text-2xl text-gray-900 font-bold mb-4">Admin Login</h2>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto
      bg-slate-300 p-10 rounded-3xl">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
