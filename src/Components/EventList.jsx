import { Link } from "react-router-dom";

const events = [
  { id: 1, name: "Rock Concert", location: "New York, USA", date: "2024-12-15", image: "https://via.placeholder.com/800x300" },
  { id: 2, name: "Pop Concert", location: "London, UK", date: "2024-12-20", image: "https://via.placeholder.com/400x250" },
  // Add more events here
];

const formatDate = (dateString) => {
  const options = { weekday: 'short', day: 'numeric', month: 'short' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
};

const EventList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-[200px] object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">{event.name}</h3>
            <p className="text-lg text-gray-400 mb-2">{event.location}</p>
            <p className="text-lg text-gray-400 mb-4">{formatDate(event.date)}</p>
            <Link
              to={`/event/${event.id}`}  // This will navigate to the EventDetails page
              className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Book Event
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
