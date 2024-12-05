import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">About Ticket Commander</h1>
      <p className="text-lg text-gray-300 mb-4">
        **Ticket Commander** is an advanced, user-friendly ticketing platform designed to simplify the process of managing and purchasing tickets for any event. Whether you're an event organizer or an attendee, Ticket Commander ensures a seamless, secure, and efficient experience from start to finish.
      </p>
      <p className="text-lg text-gray-300 mb-4">
        With Ticket Commander, event organizers can easily set up and customize ticket types, pricing options, and availability, while attendees can browse events, select their tickets, and proceed to checkout—all with a few simple clicks.
      </p>
      <h2 className="text-2xl font-semibold text-yellow-400 mt-6 mb-4">Key Features</h2>
      <ul className="list-disc ml-6 text-lg text-gray-300">
        <li>Dynamic ticket selection with different types (VIP, Standard, Early Bird, etc.)</li>
        <li>Real-time price calculation and ticket availability updates</li>
        <li>Intuitive quantity management for a smooth user experience</li>
        <li>Secure and easy checkout with multiple payment options</li>
        <li>Comprehensive event details and media for better attendee engagement</li>
        <li>Admin panel for event organizers to manage tickets and sales</li>
        <li>Seamless integration with digital ticket delivery (QR codes, PDFs)</li>
      </ul>
      <h2 className="text-2xl font-semibold text-yellow-400 mt-6 mb-4">Why Choose Ticket Commander?</h2>
      <p className="text-lg text-gray-300 mb-4">
        Ticket Commander is designed for efficiency, customization, and scalability. It simplifies ticket management for organizers while providing a smooth and modern ticket purchasing experience for attendees. Whether you're hosting a small local event or a large international conference, Ticket Commander is built to scale and provide a high-quality experience for everyone involved.
      </p>
      <p className="text-lg text-gray-300 mb-4">
        Security is our top priority. With robust payment processing and secure user data management, Ticket Commander ensures that both event organizers and attendees can trust the platform for all their ticketing needs.
      </p>
      <h2 className="text-2xl font-semibold text-yellow-400 mt-6 mb-4">Get Started</h2>
      <p className="text-lg text-gray-300">
        Ready to manage your event and sell tickets with ease? Get started with **Ticket Commander** today and experience the future of ticketing. Whether you're an event organizer looking to manage your sales or an attendee looking to purchase tickets, Ticket Commander has everything you need.
      </p>
    </div>
  );
}

export default About;
