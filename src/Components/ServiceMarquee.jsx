import React from "react";
import image1 from "../assets/Images/serve2.png";
import image2 from "../assets/Images/serve3.png";
import image3 from "../assets/Images/serve4.png";
import image4 from "../assets/Images/serve2.png";

const ServiceMarquee = () => {
  return (
    <div className=" mt-10 md:mt-20 flex justify-end ">
      <div
        className="service-marquee "
        style={{ "--numItems": imageDetails.length }}
      >
        <div className="service-marquee-track">
          {imageDetails.map((d, idx) => (
            <div
              key={idx}
              className="service-marquee-item rounded-xl rounded-b-xl overflow-hidden relative"
              style={{
                backgroundImage: `url(${d.image})`,
                "--itemPosition": idx + 1,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              {/* Content */}
              <div className="relative flex flex-col h-full justify-end p-4">
                <h2 className="text-xl font-semibold text-white">{d.title}</h2>
                <p className="text-sm text-white">{d.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceMarquee;

const imageDetails = [
  {
    image: image1,
    title: "Academics & Researchers",
    details:
      "Professors, lecturers, and PhD candidates with publications and citations.",
  },
  {
    image: image2,
    title: "Students & Recent Graduates",
    details: "High achievers looking to secure U.S. opportunities.",
  },
  {
    image: image3,
    title: "Professionals & Entrepreneurs",
    details: "Industry leaders, executives, and innovators.",
  },
  {
    image: image4,
    title: "Creative Professionals",
    details:
      "Artists, performers, designers, and others with extraordinary accomplishments.",
  },
];
