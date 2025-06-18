import { useState } from 'react';

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600 p-4">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
        {/* Left Side */}
        <div className="flex flex-row md:flex-col justify-center items-center bg-gradient-to-br from-cyan-400 to-blue-500 text-white p-10 w-full md:w-1/2">
          <div className="text-center">
            <div className="text-6xl mb-4">👻</div>
            <h2 className="text-3xl font-bold mb-4">Romanchat</h2>
            <p className="text-sm opacity-80 mb-6">
              Tempat ngobrol bareng yang ramah dan menyenangkan.
            </p>
            <button
              className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-blue-100 transition"
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister ? 'Masuk' : 'Daftar Sekarang'}
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {isRegister ? 'Buat Akun' : 'Masuk ke Akun Anda'}
          </h2>
          <form className="space-y-4">
            {isRegister && (
              <>
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </>
            )}
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Kata Sandi"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {isRegister && (
              <input
                type="password"
                placeholder="Konfirmasi Kata Sandi"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold py-2 rounded-full hover:opacity-90 transition"
            >
              {isRegister ? 'Daftar' : 'Masuk'}
            </button>
            <p className="text-center text-sm text-gray-500">
              {isRegister ? 'Sudah punya akun?' : 'Belum punya akun?'}{' '}
              <span
                className="text-blue-500 font-medium hover:underline cursor-pointer"
                onClick={() => setIsRegister(!isRegister)}
              >
                {isRegister ? 'Masuk di sini' : 'Daftar sekarang'}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
