import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { saveAs } from "file-saver";

const Confirmation = () => {
  const { state } = useLocation();
  const { email, fullName, eventName, eventDate, eventLocation, selectedTickets } = state;

  const ticketRef = useRef();

  const handleDownloadTicket = async () => {
    if (ticketRef.current) {
      const domtoimage = await import("dom-to-image-more");
      try {
        const blob = await domtoimage.toBlob(ticketRef.current);
        saveAs(blob, `${eventName}_ticket.png`);
      } catch (error) {
        console.error("Failed to download ticket:", error);
      }
    }
  };

  return (
    <div className="bg-black text-white p-6 mt-12">
      <h2 className="text-3xl font-semibold mb-4">
        Thank you, {fullName}! You’re all set for {eventName}.
      </h2>
      <div
        ref={ticketRef}
        className="bg-gradient-to-r from-blue-500 to-green-500 text-black p-6 rounded-md shadow-md mb-4"
        style={{ width: "400px", height: "250px" }}
      >
        <h3 className="text-2xl font-bold text-white">{eventName}</h3>
        <p className="text-white mt-2"><strong>Date:</strong> {eventDate}</p>
        <p className="text-white"><strong>Location:</strong> {eventLocation}</p>
        <p className="text-white mt-4"><strong>Attendee:</strong> {fullName}</p>
        <p className="text-white"><strong>Tickets:</strong> {selectedTickets}</p>
      </div>
      <button
        onClick={handleDownloadTicket}
        className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300"
      >
        Download Tickets
      </button>
      <p className="mt-4">A confirmation email has been sent to: {email}</p>
    </div>
  );
};

export default Confirmation;
