function Membership() {
    return (
        <div data-name="membership-page" className="pt-20">
            <div className="hero-gradient py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4" data-name="membership-title">
                        Join Our Alliance
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto" data-name="membership-description">
                        Choose the membership that best fits your business needs and start your digital transformation journey today.
                    </p>
                </div>
            </div>
            <MembershipPlans />
            <MembershipBenefits />
        </div>
    );
}
