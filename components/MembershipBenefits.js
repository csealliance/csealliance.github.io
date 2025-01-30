function MembershipBenefits() {
    const benefits = [
        {
            icon: "fa-book",
            title: "Educational Resources",
            description: "Access comprehensive e-commerce learning materials and industry reports"
        },
        {
            icon: "fa-handshake",
            title: "Networking",
            description: "Connect with industry leaders and potential business partners"
        },
        {
            icon: "fa-chart-pie",
            title: "Market Insights",
            description: "Stay informed with latest market trends and analysis"
        },
        {
            icon: "fa-comments",
            title: "Expert Support",
            description: "Get guidance from industry experts and consultants"
        }
    ];

    return (
        <section className="py-20 bg-white" data-name="membership-benefits">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title">Membership Benefits</h2>
                <p className="section-subtitle">
                    Unlock valuable resources and opportunities to grow your business
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-name="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="benefit-card" data-name="benefit">
                            <div className="benefit-icon">
                                <i className={`fas ${benefit.icon}`}></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
