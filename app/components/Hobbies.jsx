"use client";

export default function Hobbies({ onClose }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        <h2 className="text-4xl font-bold mb-8 text-center animate-pulse">
          Hobbies
        </h2>

        {/* Hobby and Animation Pairing Section */}
        <div className="flex flex-col space-y-6">
          {/* Pair: Motorbike Riding and Animation */}
          <div className="flex items-center justify-between">
            {/* Hobby: Motor Bike Riding */}
            <div className="flex-1">
              <button className="bg-[#2F3E46] text-white text-xl font-bold py-4 px-8 rounded-lg hover:bg-[#1A2428] transition duration-300 w-full text-left">
                Motor Bike Riding
              </button>
            </div>

            {/* Animation: Motor Bike Riding */}
            <div className="flex-1 flex justify-center">
              <iframe
                src="https://lottie.host/embed/b7f00cc9-7df2-4a79-aec2-c55043275f04/1ym6byJOLz.json"
                width="150"
                height="150"
                frameBorder="0"
                style={{ border: "none", overflow: "hidden" }}
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Pair: Reading and Animation */}
          <div className="flex items-center justify-between">
            {/* Hobby: Reading */}
            <div className="flex-1">
              <button className="bg-[#2F3E46] text-white text-xl font-bold py-4 px-8 rounded-lg hover:bg-[#1A2428] transition duration-300 w-full text-left">
                Reading
              </button>
            </div>

            {/* Animation: Reading */}
            <div className="flex-1 flex justify-center">
              <iframe
                src="https://lottie.host/embed/8e1cc70c-0527-4873-82ad-813a5ed6a8fd/QujOYqI4cj.json"
                width="150"
                height="150"
                frameBorder="0"
                style={{ border: "none", overflow: "hidden" }}
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Pair: Hiking and Animation */}
          <div className="flex items-center justify-between">
            {/* Hobby: Hiking */}
            <div className="flex-1">
              <button className="bg-[#2F3E46] text-white text-xl font-bold py-4 px-8 rounded-lg hover:bg-[#1A2428] transition duration-300 w-full text-left">
                Hiking
              </button>
            </div>

            {/* Animation: Hiking */}
            <div className="flex-1 flex justify-center">
              <iframe
                src="https://lottie.host/embed/ce8e68f4-baf2-4eaa-a3e4-eba84022d4c0/Rp7EvNBd3r.json"
                width="150"
                height="150"
                frameBorder="0"
                style={{ border: "none", overflow: "hidden" }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
