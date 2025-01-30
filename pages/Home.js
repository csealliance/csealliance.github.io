function Home({ onNavigate }) {
    return (
        <div data-name="home-page">
            <Hero onNavigate={onNavigate} />
            <Features />
            <Programs onNavigate={onNavigate} />
            <Stats />
            <CallToAction onNavigate={onNavigate} />
        </div>
    );
}
