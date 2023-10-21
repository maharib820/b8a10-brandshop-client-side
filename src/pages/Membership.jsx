const Membership = () => {

    const packages = [
        {
            id: 1,
            name: 'Basic Membership',
            price: '$49/month',
        },
        {
            id: 2,
            name: 'Premium Membership',
            price: '$99/month',
        },
        {
            id: 3,
            name: 'Ultimate Membership',
            price: '$149/month',
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen p-8 mt-10">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-semibold mb-6">Buy Membership Card</h1>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {packages.map((packag) => (
                        <div
                            key={packag.id}
                            className="bg-white p-6 rounded-lg shadow-md border border-gray-300"
                        >
                            <h2 className="text-lg font-semibold mb-2">{packag.name}</h2>
                            <p className="text-gray-600 mb-4">{packag.price}</p>
                            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full mt-6 hover:bg-blue-700">
                                Select Package
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Membership;