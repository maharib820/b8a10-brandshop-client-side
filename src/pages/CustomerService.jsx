

const CustomerService = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8 mt-10">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-semibold mb-6">Customer Service</h1>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
                    <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                    <p className="text-gray-600 mb-4">
                        If you have any questions or need assistance, please feel free to contact our customer service team.
                    </p>
                    <div className="mb-4">
                        <p className="font-semibold">Email:</p>
                        <p className="text-blue-500">support@yourwebsite.com</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold">Phone:</p>
                        <p className="text-blue-500">+880184353....</p>
                    </div>
                    <div className="mb-6">
                        <p className="font-semibold">Hours of Operation:</p>
                        <p className="text-gray-600">Saturday - Friday: 9:00 AM - 12:00 PM</p>
                    </div>
                    <h2 className="text-lg font-semibold mb-4">Customer Support Form</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="text-sm text-gray-600 font-semibold block mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full border py-2 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="text-sm text-gray-600 font-semibold block mb-2">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border py-2 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="text-sm text-gray-600 font-semibold block mb-2">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                className="w-full border py-2 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
                                rows="4"
                                placeholder="Type your message here"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full w-full hover:bg-blue-700"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CustomerService;