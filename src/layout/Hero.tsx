import logo from '../assets/logo.png';

export default function Hero() {
    return (
        <section className="bg-gradient-to-b from-teal-500 to-white min-h-screen flex items-center justify-center text-center px-4">
            <div className="max-w-3xl">
                <img
                    src={logo}
                    alt="Logo Pokja"
                    className="w-40 mx-auto mb-6 animate-fade-in"
                />
                <h1 className="text-4xl md:text-5xl font-bold text-teal-800 drop-shadow-md">
                    Selamat Datang di POKJAPPSDMLH
                </h1>
                <p className="mt-4 text-lg text-teal-900">
                    Platform digital untuk pengelolaan persuratan, dokumentasi, dan kolaborasi.
                </p>

                <a
                    href="#persuratan"
                    className="inline-block mt-8 bg-teal-600 text-white font-semibold py-3 px-6 rounded-full shadow hover:bg-teal-700 transition"
                >
                    Lihat Persuratan
                </a>
            </div>
        </section>
    );
}
