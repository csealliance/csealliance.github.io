function Stats() {
    const stats = [
        { number: "1000+", label: "Member SMEs" },
        { number: "50+", label: "Educational Programs" },
        { number: "200+", label: "Success Stories" },
        { number: "25+", label: "Industry Partners" }
    ];

    return (
        <section className="py-20 bg-white" data-name="stats">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-name="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card" data-name="stat">
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
