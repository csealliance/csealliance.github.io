function App() {
    const [currentPage, setCurrentPage] = React.useState('home');
    const [selectedProgram, setSelectedProgram] = React.useState(null);

    const renderPage = () => {
        switch(currentPage) {
            case 'membership':
                return <Membership />;
            case 'program-details':
                return <ProgramDetails program={selectedProgram} />;
            default:
                return <Home onNavigate={navigate} />;
        }
    };

    const navigate = (page, data = null) => {
        if (data) {
            setSelectedProgram(data);
        }
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
