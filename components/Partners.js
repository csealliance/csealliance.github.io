function Partners() {
    return (
        <div className="py-16 px-6" data-name="partners-section">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-white mb-12" data-name="partners-title">
                    Trusted by Leading Brands
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-name="partners-grid">
                    {[1, 2, 3, 4].map((partner) => (
                        <div key={partner} className="glass-card p-6 flex items-center justify-center">
                            <div className="w-32 h-16 bg-white/20 rounded-lg"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
