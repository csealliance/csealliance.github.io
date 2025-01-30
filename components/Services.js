function Services() {
    const services = [
        {
            title: "Smart Payments",
            description: "Accept payments globally with our secure and efficient payment processing system",
            icon: "💳"
        },
        {
            title: "Digital Wallet",
            description: "Manage all your transactions in one place with our intuitive digital wallet",
            icon: "👝"
        },
        {
            title: "Analytics Dashboard",
            description: "Track and analyze your business performance with detailed insights",
            icon: "📊"
        }
    ];

    return (
        <div className="py-16 px-6" data-name="services-section">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-white mb-12" data-name="services-title">
                    Our Solutions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-name="services-grid">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
}
