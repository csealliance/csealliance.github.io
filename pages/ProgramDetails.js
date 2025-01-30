function ProgramDetails({ program }) {
    if (!program) {
        return (
            <div className="pt-20 min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <p>Program not found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-20 min-h-screen bg-gray-50" data-name="program-details">
            <div className="hero-gradient py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-white mb-4" data-name="program-title">
                        {program.title}
                    </h1>
                    <div className="flex flex-wrap gap-4 text-white/90">
                        <span className="flex items-center">
                            <i className="fas fa-clock mr-2"></i>
                            {program.duration}
                        </span>
                        <span className="flex items-center">
                            <i className="fas fa-location-dot mr-2"></i>
                            {program.type}
                        </span>
                        <span className="flex items-center">
                            <i className="fas fa-tag mr-2"></i>
                            {program.price}
                        </span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                            <h2 className="text-2xl font-bold mb-4">Program Overview</h2>
                            <p className="text-gray-600 whitespace-pre-line">{program.fullDescription}</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
                            <ul className="space-y-3">
                                {program.curriculum.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                            <h2 className="text-xl font-bold mb-4">Program Details</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-gray-700">Schedule</h3>
                                    <p className="text-gray-600">{program.schedule}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-700">Requirements</h3>
                                    <p className="text-gray-600">{program.requirements}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-700">Price</h3>
                                    <p className="text-2xl font-bold text-red-600">{program.price}</p>
                                </div>
                                <button className="btn-primary w-full">
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
