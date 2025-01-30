function FAQ() {
    const faqs = [
        {
            question: "How secure are the payments?",
            answer: "We use industry-standard encryption and security protocols to ensure all transactions are secure. Our platform is PCI DSS compliant and regularly audited."
        },
        {
            question: "What payment methods are supported?",
            answer: "We support all major credit cards, debit cards, bank transfers, and various digital wallets. The specific methods available may vary by region."
        },
        {
            question: "How long does it take to set up an account?",
            answer: "The basic account setup takes just a few minutes. For business accounts requiring verification, the process typically takes 1-2 business days."
        },
        {
            question: "Are there any hidden fees?",
            answer: "No, we believe in complete transparency. All our fees are clearly listed in our pricing plans, and there are no hidden charges."
        }
    ];

    return (
        <div className="py-24 px-6" data-name="faq-section">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-6" data-name="faq-title">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-200 max-w-2xl mx-auto" data-name="faq-subtitle">
                        Find answers to common questions about our services
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-name="faq-grid">
                    {faqs.map((faq, index) => (
                        <div key={index} className="glass-card p-8" data-name="faq-card">
                            <h3 className="text-xl font-semibold text-white mb-4" data-name="faq-question">
                                {faq.question}
                            </h3>
                            <p className="text-gray-200" data-name="faq-answer">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
