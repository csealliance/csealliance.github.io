function Navbar({ onNavigate }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (page) => {
        onNavigate(page);
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-white shadow-lg fixed w-full z-50" data-name="navbar">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center cursor-pointer" data-name="logo" onClick={() => handleNavigation('home')}>
                        <i className="fas fa-leaf maple-leaf text-2xl mr-2"></i>
                        <span className="font-bold text-xl">Canada SME eCommerce Alliance</span>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center" data-name="mobile-menu-button">
                        <button 
                            className="text-gray-700 hover:text-red-600"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-8" data-name="desktop-menu">
                        <a href="#programs" className="text-gray-700 hover:text-red-600">Programs</a>
                        <a href="#features" className="text-gray-700 hover:text-red-600">Features</a>
                        <a href="#about" className="text-gray-700 hover:text-red-600">About</a>
                        <button className="btn-primary" onClick={() => handleNavigation('membership')}>Join Now</button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div 
                    className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mobile-menu`}
                    data-name="mobile-menu"
                >
                    <div className="flex flex-col space-y-4 py-4">
                        <a 
                            href="#programs" 
                            className="text-gray-700 hover:text-red-600 px-2 py-1"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Programs
                        </a>
                        <a 
                            href="#features" 
                            className="text-gray-700 hover:text-red-600 px-2 py-1"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Features
                        </a>
                        <a 
                            href="#about" 
                            className="text-gray-700 hover:text-red-600 px-2 py-1"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </a>
                        <button 
                            className="btn-primary w-full"
                            onClick={() => handleNavigation('membership')}
                        >
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
