import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faMapMarkerAlt, faTicketAlt } from "@fortawesome/free-solid-svg-icons";

const events = [
  { id: 1, name: "Asking Alexandria", location: "Birmingham Symphony Hall | Birmingham", date: "2024-12-15", image: "Asking.jpg" },
  { id: 2, name: "Luvcat", location: "LEAF on Bold St. | Liverpool", date: "2024-12-15", image: "Luvcat.jpg" },
  { id: 3, name: "Sam Fender", location: "OVO Hydro | Glasgow", date: "2024-12-16", image: "sam.jpg" },
  { id: 4, name: "Tom Meighan", location: "O2 Forum Kentish Town | London", date: "2024-12-15", image: "Tom.jpg" },
  { id: 5, name: "Weegie Hink Ae Panto?", location: "Oran Mor | Glasgow", date: "2024-12-20", image: "event-placeholder.jpg" },
  { id: 6, name: "Montell Fish", location: "O2 Forum Kentish Town | London", date: "2024-12-20", image: "fish.png" },
  { id: 7, name: "The Rolling People", location: "O2 Ritz Manchester | Manchester", date: "2024-12-21", image: "roll.jpg" },
  { id: 8, name: "Aurie Styla's Christmas CrackUp", location: "The Frog and Bucket | Manchester", date: "2024-12-22", image: "Austria.jpg" },
  { id: 9, name: "DLT Anti New Years", location: "Studio 338 | London", date: "2024-12-29", image: "dlt.jpg" },
];

const formatDate = (dateString) => {
  const options = { weekday: "short", day: "numeric", month: "short" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

const EventList = () => {
  return (
    <div className="min-h-screen bg-black text-white mt-4">
      {/* Header */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">Events</h1>
        <p className="text-gray-400 mt-2">Discover and book your favorite events</p>
      </header>

      {/* Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-9">
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
              <p className="text-lg text-gray-400 mb-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                {event.location}
              </p>
              <p className="text-lg text-gray-400 mb-4">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                {formatDate(event.date)}
              </p>
              <Link
                to={`/event/${event.id}`}
                className="inline-flex items-center bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faTicketAlt} className="mr-2" />
                Get Ticket
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
