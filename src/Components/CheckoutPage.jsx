import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extracting data from location state
  const { event, name: initialName, email: initialEmail, ticketCount: initialTicketCount, selectedTicketType: initialTicketType } = location.state || {};

  const [name, setName] = useState(initialName || '');
  const [email, setEmail] = useState(initialEmail || '');
  const [phone, setPhone] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');

  useEffect(() => {
    if (!event) {
      console.error('Event data is missing!');
      navigate('/');
    }
  }, [event, navigate]);

  if (!event) {
    return <div>Error: Event details not available.</div>;
  }

  const handleContinue = () => {
    navigate('/confirmation', { state: { name, email, phone, event, specialRequest } });
  };

  // Calculate minutes to the event
  const eventDate = new Date(event.date);
  const now = new Date();
  const timeDifference = Math.max((eventDate - now) / 60000, 0); // Time in minutes

  return (
    <div className="container mx-auto p-4 mt-12">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - User Info Form */}
        <div className="bg-black p-6 rounded-lg shadow-lg w-full sm:w-96">
          <h2 className="text-2xl text-white mb-4">Your Details</h2>

          {/* Name */}
          <div className="mb-4">
            <label className="text-white">First Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 p-2 rounded-md text-black bg-white"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-white">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 p-2 rounded-md text-black bg-white"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="text-white">Phone Number:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mt-2 p-2 rounded-md text-black bg-white"
            />
          </div>

          {/* Special Requests */}
          <div className="mb-4">
            <label className="text-white">Special Requests:</label>
            <textarea
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              className="w-full mt-2 p-2 rounded-md text-black bg-white"
              rows="4"
            />
          </div>
        </div>

        {/* Right Column - Event Details */}
        <div className="bg-black p-6 rounded-lg shadow-lg w-full sm:w-96">
          <h2 className="text-2xl text-white mb-4">{event.name}</h2>
          <img src={event.image} alt={event.name} className="w-full h-48 object-cover rounded-md mb-4" />
          <p className="text-white mb-2"><strong>Date:</strong> {event.date}</p>
          <p className="text-white mb-2"><strong>Location:</strong> {event.location}</p>
          <p className="text-white mb-2"><strong>Time remaining:</strong> {Math.floor(timeDifference)} minutes</p>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            className="w-full py-2 bg-green-500 text-white font-bold rounded-md mt-4"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
