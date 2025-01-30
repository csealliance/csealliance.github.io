function MembershipPlans() {
    const plans = [
        {
            name: "Startup",
            description: "Perfect for emerging e-commerce businesses",
            price: "499",
            target: "1-10 people",
            features: [
                "Free resource access",
                "Basic training courses",
                "Discounted event registration",
                "Online community support",
                "Industry news subscription"
            ]
        },
        {
            name: "SMB",
            description: "For growing e-commerce companies",
            price: "999",
            target: "10-200 employees",
            features: [
                "All Startup benefits",
                "Advanced resource access",
                "Marketing and technical support",
                "Priority event registration",
                "Expert consulting",
                "Exposure opportunities"
            ]
        },
        {
            name: "Enterprise",
            description: "For established e-commerce leaders",
            price: "2499",
            target: "200+ employees",
            features: [
                "All SMB benefits",
                "Advanced training workshops",
                "Custom industry reports",
                "Policy influence",
                "Advanced legal support",
                "International collaboration"
            ]
        },
        {
            name: "Service Provider",
            description: "For e-commerce solution providers",
            price: "1499",
            target: "Solution providers",
            features: [
                "Industry resource sharing",
                "Brand partnership opportunities",
                "Special event participation",
                "Advertising opportunities",
                "Expert recognition"
            ]
        },
        {
            name: "Individual/Student",
            description: "For future e-commerce leaders",
            price: "99",
            target: "Students & individuals",
            features: [
                "Free introductory courses",
                "Entrepreneur mentorship",
                "Online community access",
                "Industry briefings",
                "Career development"
            ]
        }
    ];

    return (
        <section className="py-20 bg-gray-50" data-name="membership-plans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title">Membership Plans</h2>
                <p className="section-subtitle">
                    Choose the plan that best suits your business stage and needs
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-name="plans-grid">
                    {plans.map((plan, index) => (
                        <div key={index} className="membership-card" data-name="plan">
                            <div className="membership-header">
                                <h3 className="text-xl font-bold">{plan.name}</h3>
                                <p className="text-gray-600">{plan.description}</p>
                                <div className="price">
                                    <span className="currency">$</span>
                                    <span className="amount">{plan.price}</span>
                                    <span className="period">/year</span>
                                </div>
                                <p className="text-sm text-gray-500">For {plan.target}</p>
                            </div>
                            <div className="membership-features">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            <i className="fas fa-check text-green-500 mr-2"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className="btn-primary w-full">Join Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
