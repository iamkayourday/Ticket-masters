import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation to checkout page

const EventDetails = () => {
  const navigate = useNavigate(); // useNavigate for navigation

  const events = [
    {
      id: 1,
      name: "Asking Alexandria",
      location: "Birmingham Symphony Hall | Birmingham",
      date: "2024-12-15",
      description: "A great concert!",
      image: "Asking.jpg",
      ticketOptions: [
        { type: "Early", price: 10 },
        { type: "Standard", price: 20 },
        { type: "VIP390", price: 30 },
        { type: "VIP515", price: 40 },
      ],
    },
    {
      id: 2,
      name: "Luvcat",
      location: "LEAF on Bold St. | Liverpool",
      date: "2024-12-15",
      description: "Doors: 18:30, Curfew: 22:00 Age Restrictions: Under 18s must be accompanied by an adult",
      image: "Luvcat.jpg",
      ticketOptions: [
        { type: "VIP", price: 30 },
        { type: "Standard", price: 15 },
      ],
    },
    // Add more events with unique images
  ];

  const event = events[0]; // Currently selecting the first event

  const [quantities, setQuantities] = useState({
    early: 0,
    standard: 0,
    vip390: 0,
    vip515: 0,
  });

  const [isCheckoutEnabled, setIsCheckoutEnabled] = useState(false);

  const handleQuantityChange = (ticketType, action) => {
    setQuantities((prevQuantities) => {
      const newQuantity =
        action === "increase"
          ? prevQuantities[ticketType] + 1
          : Math.max(prevQuantities[ticketType] - 1, 0);

      const updatedQuantities = { ...prevQuantities, [ticketType]: newQuantity };

      setIsCheckoutEnabled(
        Object.values(updatedQuantities).some((quantity) => quantity > 0)
      );

      return updatedQuantities;
    });
  };

  const handleCheckout = () => {
    navigate("/checkout", {
      state: { event, ticketCount: quantities, selectedTicketType: "Standard" },
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white mt-12">
      {/* Event Image and Name */}
      <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg mb-8">
        <img
          src={event.image} // Unique image for each event
          alt={event.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold backdrop-blur-lg">
          {/* {event.name} */}
        </div>
      </div>

      {/* Event Details */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">{event.name}</h2>
        <p className="text-lg text-gray-300 mb-2">{event.description}</p>
        <p className="text-lg text-gray-400">
          <strong>Location:</strong> {event.location}
        </p>
        <p className="text-lg text-gray-400">
          <strong>Date:</strong> {event.date}
        </p>
      </div>

      {/* Ticket Options */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-6">Tickets</h2>

        {["early", "standard", "vip390", "vip515"].map((ticketType) => {
          const ticketOption = event.ticketOptions.find(
            (option) => option.type.toLowerCase() === ticketType
          );

          if (!ticketOption) return null; // Skip undefined ticket options

          return (
            <div
              key={ticketType}
              className="flex justify-between items-center border-b pb-4 mb-4"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-200">
                  {ticketOption.type}
                </h3>
                <p className="text-gray-400">More info</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-lg font-semibold text-gray-100">
                  Price: £{ticketOption.price}
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <button
                    onClick={() => handleQuantityChange(ticketType, "decrease")}
                    className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600"
                  >
                    -
                  </button>
                  <p className="text-lg text-gray-100">
                    Quantity: {quantities[ticketType]}
                  </p>
                  <button
                    onClick={() => handleQuantityChange(ticketType, "increase")}
                    className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* Checkout Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleCheckout}
            disabled={!isCheckoutEnabled}
            className={`w-full py-2 bg-green-500 text-white font-bold rounded-md ${
              !isCheckoutEnabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
