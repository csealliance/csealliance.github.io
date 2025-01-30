function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12" data-name="footer">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1" data-name="footer-about">
                        <div className="flex items-center mb-4">
                            <i className="fas fa-leaf maple-leaf text-2xl mr-2"></i>
                            <span className="font-bold">Canada SME eCommerce Alliance</span>
                        </div>
                        <p className="text-gray-400">
                            Supporting digital transformation and growth for Canadian small and medium enterprises.
                        </p>
                    </div>
                    <div className="col-span-1" data-name="footer-links">
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Programs</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Resources</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1" data-name="footer-contact">
                        <h3 className="font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><i className="fas fa-envelope mr-2"></i>info@canadasmealliance.ca</li>
                            <li><i className="fas fa-phone mr-2"></i>1-800-SME-HELP</li>
                            <li><i className="fas fa-map-marker-alt mr-2"></i>Toronto, ON, Canada</li>
                        </ul>
                    </div>
                    <div className="col-span-1" data-name="footer-social">
                        <h3 className="font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin text-xl"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter text-xl"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook text-xl"></i></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400" data-name="footer-bottom">
                    <p>© 2024 Canada SME eCommerce Alliance. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
