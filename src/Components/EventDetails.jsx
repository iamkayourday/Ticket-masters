import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // For navigation and event ID

const EventDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get event ID from URL
  const events = [
    {
      id: 1,
      name: "Asking Alexandria",
      location: "Birmingham Symphony Hall | Birmingham",
      date: "2024-12-15",
      description: "A great concert with live music, awesome crowd, and unforgettable moments!",
      image: "Asking.jpg",
      ticketOptions: [
        { type: "Regular", price: 10 },
        { type: "Standard", price: 20 },
        { type: "VIP", price: 30 },
      ],
    },
    {
      id: 2,
      name: "Luvcat",
      location: "LEAF on Bold St. | Liverpool",
      date: "2024-12-15",
      description: "Experience an intimate performance with amazing sound and a vibrant atmosphere.",
      image: "Luvcat.jpg",
      ticketOptions: [
        { type: "VIP", price: 30 },
        { type: "Standard", price: 15 },
        { type: "Regular", price: 10 },
      ],
    },
    {
      id: 3,
      name: "Sam Fender",
      location: "OVO Hydro | Glasgow",
      date: "2024-12-16",
      description: "Join us for an electrifying performance with high energy and an unforgettable set list.",
      image: "sam.jpg",
      ticketOptions: [
        { type: "VIP", price: 30 },
        { type: "Standard", price: 15 },
        { type: "Regular", price: 10 },
      ],
    },
    {
      id: 4,
      name: "Tom Meighan",
      location: "O2 Forum Kentish Town | London",
      date: "2024-12-15",
      description: "Former Kasabian frontman Tom Meighan is back out on tour with his terrace style chanting choruses, danceable guitar riffs, and stadium-worthy grooves. A show full of energy and passion!",
      image: "Tom.jpg",
      ticketOptions: [
        { type: "VIP", price: 30 },
        { type: "Standard", price: 15 },
        { type: "Regular", price: 10 },
      ],
    },
    {
      id: 5,
      name: "Weegie Hink Ae Panto?",
      location: "Oran Mor | Glasgow",
      date: "2024-12-20",
      description: "A hilarious panto that blends local humor and festive cheer. Expect plenty of laughs, unforgettable moments, and a heartwarming experience for all ages.",
      image: "event-placeholder.jpg",
      ticketOptions: [
        { type: "VIP", price: 30 },
        { type: "Standard", price: 15 },
        { type: "Regular", price: 10 },
      ],
    },
    {
      id: 6,
      name: "Montell Fish",
      location: "O2 Forum Kentish Town | London",
      date: "2024-12-20",
      description: "Join Montell Fish for a soulful, immersive musical journey. His unique blend of alternative R&B and reflective lyrics will leave you mesmerized.",
      image: "fish.png",
      ticketOptions: [
        { type: "VIP", price: 30 },
        { type: "Standard", price: 15 },
        { type: "Regular", price: 10 },
      ],
    },
    {
      id: 7,
      name: "The Rolling People",
      location: "O2 Ritz Manchester | Manchester",
      date: "2024-12-21",
      description: "Catch The Rolling People live, bringing indie rock to the forefront with their infectious energy and unforgettable performances.",
      image: "sam.jpg",
      ticketOptions: [
        { type: "VIP", price: 30 },
        { type: "Standard", price: 15 },
        { type: "Regular", price: 10 },
      ],
    },
    {
      id: 8,
      name: "Aurie Styla's Christmas CrackUp",
      location: "The Frog and Bucket | Manchester",
      date: "2024-12-22",
      description: "Get ready for a comedy night full of holiday humor with Aurie Styla. A night packed with laughter, festive cheer, and surprises!",
      image: "Austria.jpg",
      ticketOptions: [
        { type: "VIP", price: 30 },
        { type: "Standard", price: 15 },
        { type: "Regular", price: 10 },
      ],
    },
    {
      id: 9,
      name: "DLT Anti New Years",
      location: "Studio 338 | London",
      date: "2024-12-29",
      description: "A high-energy celebration to ring in the new year with DLT, bringing the hottest music and good vibes all night long.",
      image: "dlt.jpg",
      ticketOptions: [
        { type: "VIP", price: 30 },
        { type: "Standard", price: 15 },
        { type: "Regular", price: 10 },
      ],
    },
  ];

  // Find event by ID
  const event = events.find(event => event.id === parseInt(id));

  if (!event) {
    return <div>Event not found</div>; // If no event matches the ID, show this message
  }

  const [quantities, setQuantities] = useState({
    regular: 0,
    standard: 0,
    vip: 0,
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-white">
      {/* Event Image and Name */}
      <div className="relative h-28 w-full overflow-hidden rounded-lg shadow-lg mb-6">
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold backdrop-blur-lg">
          {event.name}
        </div>
      </div>

      {/* Event Details */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">{event.name}</h2>
        <p className="text-lg text-gray-300 mb-2">{event.description}</p> {/* Description is unique per event */}
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

        {["regular", "standard", "vip"].map((ticketType) => {
          const ticketOption = event.ticketOptions.find(
            (option) => option.type.toLowerCase() === ticketType
          );

          if (!ticketOption) return null;

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
      </div>

      {/* Checkout Button */}
      {isCheckoutEnabled && (
        <div className="mt-6 text-center">
          <button
            onClick={handleCheckout}
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
