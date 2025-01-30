function Navbar() {
    return (
        <nav className="bg-white shadow-lg fixed w-full z-50" data-name="navbar">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center" data-name="logo">
                        <i className="fas fa-leaf maple-leaf text-2xl mr-2"></i>
                        <span className="font-bold text-xl">Canada SME eCommerce Alliance</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8" data-name="nav-links">
                        <a href="#programs" className="text-gray-700 hover:text-red-600">Programs</a>
                        <a href="#features" className="text-gray-700 hover:text-red-600">Features</a>
                        <a href="#about" className="text-gray-700 hover:text-red-600">About</a>
                        <button className="btn-primary">Join Now</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
