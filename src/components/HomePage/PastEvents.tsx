import { ChevronRight, Calendar } from "lucide-react";

const PastEvents = () => {
  const pastEvents = [
    {
      id: 1,
      title: "Aero Spectra",
      date: "March 22, 2025",
      image: "/events/aero_spectra.JPG",
      description: "Ethic Day for the Aerospace department",
    },
    {
      id: 2,
      title: "Aero Nite",
      date: "September 19, 2025",
      image: "/events/aero_nite.jpg",
      description: "Annual night of Aerospace department",
    },
    // {
    //   id: 3,
    //   title: "Drone Competition",
    //   date: "January 20, 2024",
    //   image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop",
    //   description: "Annual inter-college drone racing event"
    // }
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs tracking-widest text-gray-500">
            OUR LEGACY
          </span>
          <h2 className="text-5xl md:text-6xl font-extralight tracking-wider mt-4 mb-4">
            Past Events
          </h2>
          <div className="w-16 h-px bg-white"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pastEvents.map((event, idx) => (
            <div key={event.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[4/3]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-xs text-gray-500 tracking-wider">
                  <Calendar size={14} className="mr-2" />
                  {event.date}
                </div>
                <h3 className="text-2xl font-light tracking-wide group-hover:text-gray-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 font-light">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/events"
            className="inline-flex items-center text-sm tracking-widest border border-white px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
          >
            VIEW ALL EVENTS
            <ChevronRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </>
  );
};

export default PastEvents;