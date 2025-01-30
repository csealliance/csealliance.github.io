function Pricing() {
    const plans = [
        {
            name: "Starter",
            price: "0",
            features: [
                "Basic payment processing",
                "Up to 100 transactions/month",
                "Email support",
                "Basic analytics"
            ]
        },
        {
            name: "Professional",
            price: "29",
            features: [
                "Advanced payment processing",
                "Unlimited transactions",
                "24/7 priority support",
                "Advanced analytics",
                "Custom integrations"
            ]
        },
        {
            name: "Enterprise",
            price: "99",
            features: [
                "Global payment solutions",
                "Unlimited everything",
                "Dedicated account manager",
                "Custom development",
                "API access",
                "White-label solution"
            ]
        }
    ];

    return (
        <div className="py-24 px-6" data-name="pricing-section">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-6" data-name="pricing-title">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-gray-200 max-w-2xl mx-auto" data-name="pricing-subtitle">
                        Choose the plan that works best for your business
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-name="pricing-grid">
                    {plans.map((plan, index) => (
                        <div key={index} className="glass-card p-8 flex flex-col" data-name="pricing-card">
                            <h3 className="text-xl font-semibold text-white mb-4" data-name="plan-name">
                                {plan.name}
                            </h3>
                            <div className="mb-6" data-name="plan-price">
                                <span className="text-4xl font-bold text-white">${plan.price}</span>
                                <span className="text-gray-300">/month</span>
                            </div>
                            <ul className="space-y-4 mb-auto" data-name="plan-features">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-200">
                                        <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-3 px-6 mt-8 rounded-lg bg-white text-indigo-600 hover:bg-gray-100 transition-colors" data-name="plan-button">
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
