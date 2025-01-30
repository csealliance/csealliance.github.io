function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Small Business Owner",
            content: "PayEase has transformed how I manage my business payments. The interface is intuitive and the features are exactly what I needed.",
            rating: 5,
            avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=6D28D9&color=fff&size=120"
        },
        {
            name: "Michael Chen",
            role: "E-commerce Director",
            content: "The global payment features have helped us expand our business internationally. Customer support is excellent!",
            rating: 5,
            avatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=4C1D95&color=fff&size=120"
        },
        {
            name: "Emma Wilson",
            role: "Freelancer",
            content: "As a freelancer, I need reliable payment solutions. PayEase provides exactly that, with minimal fees and maximum convenience.",
            rating: 4,
            avatar: "https://ui-avatars.com/api/?name=Emma+Wilson&background=5B21B6&color=fff&size=120"
        }
    ];

    return (
        <div className="py-24 px-6" data-name="testimonials-section">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-6" data-name="testimonials-title">
                        What Our Customers Say
                    </h2>
                    <p className="text-gray-200 max-w-2xl mx-auto" data-name="testimonials-subtitle">
                        Trusted by thousands of businesses worldwide
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-name="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card glass-card p-8" data-name="testimonial-card">
                            <div className="testimonial-quote">"</div>
                            <div className="flex justify-center mb-6" data-name="testimonial-avatar-container">
                                <div className="avatar" data-name="testimonial-avatar">
                                    <img 
                                        src={testimonial.avatar} 
                                        alt={testimonial.name}
                                        className="rounded-full"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <h4 className="text-white font-semibold text-center" data-name="testimonial-name">
                                {testimonial.name}
                            </h4>
                            <p className="text-gray-300 text-sm mb-4 text-center" data-name="testimonial-role">
                                {testimonial.role}
                            </p>
                            <div className="rating-stars justify-center" data-name="testimonial-rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i}>⭐</span>
                                ))}
                            </div>
                            <p className="text-gray-200 text-center mt-4" data-name="testimonial-content">
                                "{testimonial.content}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
