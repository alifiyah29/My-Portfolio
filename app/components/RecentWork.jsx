"use client";

export default function RecentWork({ isVisible, onClose }) {
  // Only render the modal when it is visible
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black bg-opacity-50"
      onClick={onClose} // Close the modal when clicking outside
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg flex flex-col w-auto max-w-xl"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Title Section */}
        <h2 className="text-4xl font-bold mb-6 text-center animate-pulse">
          Recent Work
        </h2>

        {/* Paragraph: Recent Work Details */}
        <div className="text-black mb-6">
          <p className="text-xl">
            <b>Research Aid</b> — Sep'24 - Present <br />
            Prof. Tamuchin McCreless, Arizona State University
          </p>
          <p className="mt-4 text-lg">
            Currently contributing to FeastFinderAI, a project utilizing spatial
            data and machine learning to predict optimal restaurant locations.
          </p>
          <p className="mt-4 text-lg">
            Optimized the model using Python and Scikit-learn, reducing
            prediction errors by 15%, and developed geospatial visualizations
            using Folium to help restaurant entrepreneurs make data-driven
            decisions.
          </p>
        </div>

        {/* Animation Section */}
        <div className="flex items-center justify-center mb-6">
          <iframe
            src="https://lottie.host/embed/ab266920-1641-4433-86f9-e38f695bcaf4/yVVvVkHnoP.json"
            width="200"
            height="200"
            frameBorder="0"
            style={{ border: "none", overflow: "hidden" }}
            allowFullScreen
          ></iframe>
        </div>

        {/* Technologies Section */}
        <div>
          <b>Technologies:</b>
          <p className="mt-2 text-lg">
            Python | Scikit-learn | Folium | Geospatial Data Analysis
          </p>
        </div>
      </div>
    </div>
  );
}
