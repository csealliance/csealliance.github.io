function App() {
    const [currentPage, setCurrentPage] = React.useState('home');

    const renderPage = () => {
        switch(currentPage) {
            case 'membership':
                return <Membership />;
            default:
                return <Home />;
        }
    };

    const navigate = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    return (
        <div data-name="app">
            <Navbar onNavigate={navigate} />
            {renderPage()}
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
