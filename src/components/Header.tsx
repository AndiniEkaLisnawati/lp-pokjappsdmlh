import logo from '../assets/icon/icon.png';

export default function Header() {
    return (
        <header className="bg-teal-500 shadow-md px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center gap-4">
                <img
                    src={logo}
                    alt="Logo Pokja"
                    className="w-14 h-14 object-contain rounded"
                />
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                    POKJAPPSDMLH
                </h1>
            </div>
        </header>
    );
}