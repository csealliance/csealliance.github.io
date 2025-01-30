function Programs({ onNavigate }) {
    const programs = [
        {
            id: "digital-strategy",
            title: "Digital Strategy Workshop",
            description: "Learn how to develop and implement effective digital commerce strategies.",
            duration: "4 weeks",
            type: "Online",
            fullDescription: `Our Digital Strategy Workshop is designed to help SMEs develop comprehensive digital commerce strategies. 
                            This 4-week online program covers essential topics including:
                            • Digital transformation fundamentals
                            • E-commerce platform selection and setup
                            • Digital marketing strategies
                            • Data analytics and decision making`,
            curriculum: [
                "Week 1: Digital Commerce Fundamentals",
                "Week 2: Platform Selection and Implementation",
                "Week 3: Digital Marketing Essentials",
                "Week 4: Analytics and Optimization"
            ],
            schedule: "Flexible online learning with 2 live sessions per week",
            requirements: "Basic understanding of business operations and internet usage",
            price: "$599"
        },
        {
            id: "ecommerce-masterclass",
            title: "eCommerce Masterclass",
            description: "Master the essentials of running a successful online business.",
            duration: "8 weeks",
            type: "Hybrid",
            fullDescription: `The eCommerce Masterclass is a comprehensive program that combines online learning with in-person workshops. 
                            This hybrid program provides hands-on experience in:
                            • Building and managing online stores
                            • Supply chain and inventory management
                            • Customer service excellence
                            • Payment processing and financial management`,
            curriculum: [
                "Week 1-2: E-commerce Foundations",
                "Week 3-4: Operations Management",
                "Week 5-6: Customer Experience",
                "Week 7-8: Financial Management"
            ],
            schedule: "Online modules with bi-weekly in-person workshops",
            requirements: "Basic digital literacy and business experience",
            price: "$1,299"
        },
        {
            id: "global-market",
            title: "Global Market Entry",
            description: "Prepare your business for international expansion.",
            duration: "12 weeks",
            type: "In-person",
            fullDescription: `The Global Market Entry program helps businesses expand internationally through e-commerce. 
                            This intensive program covers:
                            • International market analysis
                            • Cross-border e-commerce operations
                            • International logistics and fulfillment
                            • Global payment solutions`,
            curriculum: [
                "Week 1-3: International Market Analysis",
                "Week 4-6: Cross-border Operations",
                "Week 7-9: Global Logistics",
                "Week 10-12: International Finance"
            ],
            schedule: "Weekly in-person sessions with hands-on workshops",
            requirements: "Established e-commerce business with minimum 2 years operation",
            price: "$2,499"
        }
    ];

    return (
        <section id="programs" className="py-20 bg-gray-50" data-name="programs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title">Educational Programs</h2>
                <p className="section-subtitle">
                    Enhance your digital commerce capabilities through our specialized programs.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-name="programs-grid">
                    {programs.map((program) => (
                        <div key={program.id} className="program-card" data-name="program">
                            <div className="program-content">
                                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                                <p className="text-gray-600 mb-4">{program.description}</p>
                                <div className="program-details">
                                    <span><i className="fas fa-clock mr-2"></i>{program.duration}</span>
                                    <span><i className="fas fa-location-dot mr-2"></i>{program.type}</span>
                                </div>
                            </div>
                            <button 
                                className="program-btn"
                                onClick={() => onNavigate('program-details', program)}
                            >
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
