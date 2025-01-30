function CallToAction({ onNavigate }) {
    return (
        <section className="hero-gradient py-20" data-name="cta">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-name="cta-title">
                    Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-name="cta-description">
                    Join our alliance today and get access to resources, support, and a community of forward-thinking Canadian businesses.
                </p>
                <button className="btn-secondary" data-name="cta-button" onClick={() => onNavigate('membership')}>
                    Become a Member
                </button>
            </div>
        </section>
    );
}
