function FeatureCard({ title, description, icon }) {
    return (
        <div className="feature-card glass-card p-8" data-name="feature-card">
            <div className="feature-icon-circle" data-name="feature-icon">
                <span className="text-2xl">{icon}</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4" data-name="feature-title">
                {title}
            </h3>
            <div className="feature-line"></div>
            <p className="text-gray-200" data-name="feature-description">
                {description}
            </p>
        </div>
    );
}
