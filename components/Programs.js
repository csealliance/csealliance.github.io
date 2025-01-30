function Programs() {
    const programs = [
        {
            title: "Digital Strategy Workshop",
            description: "Learn how to develop and implement effective digital commerce strategies.",
            duration: "4 weeks",
            type: "Online"
        },
        {
            title: "eCommerce Masterclass",
            description: "Master the essentials of running a successful online business.",
            duration: "8 weeks",
            type: "Hybrid"
        },
        {
            title: "Global Market Entry",
            description: "Prepare your business for international expansion.",
            duration: "12 weeks",
            type: "In-person"
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
                    {programs.map((program, index) => (
                        <div key={index} className="program-card" data-name="program">
                            <div className="program-content">
                                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                                <p className="text-gray-600 mb-4">{program.description}</p>
                                <div className="program-details">
                                    <span><i className="fas fa-clock mr-2"></i>{program.duration}</span>
                                    <span><i className="fas fa-location-dot mr-2"></i>{program.type}</span>
                                </div>
                            </div>
                            <button className="program-btn">Learn More</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
