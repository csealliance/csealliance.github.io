function App() {
    return (
        <div data-name="app">
            <Navbar />
            <Hero />
            <Features />
            <Programs />
            <Stats />
            <CallToAction />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
