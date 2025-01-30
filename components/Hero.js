function Hero() {
    return (
        <div className="hero-gradient pt-32 pb-20" data-name="hero">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0" data-name="hero-content">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-name="hero-title">
                            Empowering Canadian SMEs in the Digital Economy
                        </h1>
                        <p className="text-xl text-white/90 mb-8" data-name="hero-description">
                            Join our alliance to access resources, education, and networking opportunities that will help your business thrive in the digital age.
                        </p>
                        <div className="flex space-x-4" data-name="hero-cta">
                            <button className="btn-secondary">Learn More</button>
                            <button className="btn-primary bg-white text-red-600">Get Started</button>
                        </div>
                    </div>
                    <div className="md:w-1/2" data-name="hero-image">
                        <img 
                            src="https://placehold.co/600x400/e60012/ffffff?text=Canadian+SMEs" 
                            alt="Canadian SMEs"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
