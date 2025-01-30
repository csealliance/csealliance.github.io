function ServiceCard({ title, description, icon }) {
    return (
        <div className="glass-card p-6" data-name="service-card">
            <div className="icon-circle" data-name="service-icon">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3" data-name="service-title">{title}</h3>
            <p className="text-gray-200" data-name="service-description">{description}</p>
        </div>
    );
}
