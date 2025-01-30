function Features() {
    const features = [
        {
            icon: "fa-graduation-cap",
            title: "Educational Programs",
            description: "Access comprehensive training and resources to develop your digital commerce strategies."
        },
        {
            icon: "fa-chart-line",
            title: "Industry Research",
            description: "Stay informed with latest market trends and policy developments affecting Canadian SMEs."
        },
        {
            icon: "fa-users",
            title: "Networking",
            description: "Connect with industry experts and fellow businesses to share insights and opportunities."
        },
        {
            icon: "fa-globe",
            title: "Global Reach",
            description: "Expand your business internationally with our specialized support services."
        }
    ];

    return (
        <section id="features" className="py-20 bg-white" data-name="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title">Why Join Our Alliance?</h2>
                <p className="section-subtitle">
                    We provide the tools and support you need to succeed in the digital marketplace.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-name="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card p-6" data-name="feature">
                            <div className="feature-icon">
                                <i className={`fas ${feature.icon}`}></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
