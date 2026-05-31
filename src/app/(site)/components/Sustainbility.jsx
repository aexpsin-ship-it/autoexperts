import React from "react";

const sustainabilityData = [
  {
    title: "Eco-Friendly Office",
    description:
      "Our office is designed with sustainability in mind by using natural lighting, ventilation, and eco-friendly materials to reduce energy consumption and minimize our carbon footprint.",
  },
  {
    title: "Maximizing Sunlight & Natural Air",
    description:
      "We strategically use windows, skylights, and open spaces to improve airflow and reduce dependency on artificial lighting and air conditioning.",
  },
  {
    title: "Water Conservation",
    description:
      "Our facilities are equipped with water-efficient systems, and we encourage responsible water usage to help conserve this valuable resource.",
  },
  {
    title: "Minimum Paper Use",
    description:
      "Through digital documentation and communication, we follow a paperless office policy that helps reduce waste and conserve forests.",
  },
  {
    title: "Zero Waste Policy",
    description:
      "We promote recycling, waste segregation, and material reuse to support a circular economy and minimize environmental impact.",
  },
  {
    title: "Groundwater Recharge",
    description:
      "Rainwater harvesting systems across our properties help recharge groundwater levels and support sustainable water management.",
  },
  {
    title: "Profit Share for Charity",
    description:
      "A portion of our profits supports environmental causes including tree plantation, environmental education, and animal welfare initiatives.",
  },
  {
    title: "Reducing Carbon Footprint",
    description:
      "We encourage sustainable practices such as energy conservation, waste reduction, and responsible transportation.",
  },
];

const certifications = [
  {
    title: "EPA Green Partner",
    year: "Since 2018",
  },
  {
    title: "ISO 14001 Certified",
    year: "Since 2020",
  },
  {
    title: "LEED Silver Facility",
    year: "Since 2021",
  },
];

const practices = [
  {
    title: "Fluid Management",
    points: [
      "Closed-loop oil recycling system",
      "Waste oil converted to energy",
      "Coolant purification",
      "Zero discharge to municipal systems",
    ],
  },
  {
    title: "Energy Efficiency",
    points: [
      "LED lighting systems",
      "Solar energy utilization",
      "Energy-efficient equipment",
      "Reduced power consumption",
    ],
  },
  {
    title: "Recycling Programs",
    points: [
      "Paper recycling initiatives",
      "Plastic waste management",
      "Battery disposal systems",
      "Reusable packaging methods",
    ],
  },
  {
    title: "Green Transportation",
    points: [
      "Electric vehicle support",
      "Reduced carbon emissions",
      "Eco-friendly commuting",
      "Hybrid vehicle servicing",
    ],
  },
];

const Sustainbility = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 via-white to-green-100 overflow-hidden">
      
      {/* HERO SECTION */}
      <div className="px-4 sm:px-6 lg:px-20 py-14 lg:py-20">
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-green-800 leading-tight">
            Sustainability
          </h2>

          <div className="w-24 h-1 bg-green-600 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-600 mt-6 text-sm sm:text-base lg:text-lg leading-relaxed">
            At AutoExperts, we believe in building a cleaner and greener
            future. Our commitment to sustainability drives every step we
            take toward reducing environmental impact and promoting
            responsible practices.
          </p>
        </div>

        {/* Sustainability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8 max-w-7xl mx-auto mt-14">
          
          {sustainabilityData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-green-100 rounded-3xl p-5 sm:p-7 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-green-100 text-2xl mb-5">
                🌱
              </div>

              <h3 className="text-xl font-bold text-green-800 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PRACTICES SECTION */}
      <div className="px-4 sm:px-6 lg:px-20 py-14 lg:py-20">
        
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-800">
            Sustainable Practices
          </h2>

          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Environmental responsibility integrated into every aspect of our
            operations.
          </p>
        </div>

        {/* Practice Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 mt-12">
          
          {practices.map((practice, index) => (
            <div
              key={index}
              className="bg-white border border-green-100 rounded-3xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              
              <h3 className="text-green-800 text-xl font-bold mb-5">
                {practice.title}
              </h3>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-sm marker:text-green-600">
                
                {practice.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* FUTURE READY SECTION */}
      <div className="px-4 sm:px-6 lg:px-20 py-14 lg:py-20">
        
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          
          {/* LEFT */}
          <div className="flex-1">
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-800 leading-tight">
              Future-Ready Service
            </h2>

            <p className="text-gray-700 mt-5 text-sm sm:text-base leading-relaxed">
              As European manufacturers transition to electric and hybrid
              powertrains, we’ve invested heavily in the specialized
              equipment and training needed to service these advanced
              vehicles.
            </p>

            {/* Card 1 */}
            <div className="bg-[#eef1f8] rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row gap-5 mt-8 shadow-sm">
              
              <div className="bg-green-700 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-white text-3xl shrink-0">
                ⚡
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#23295b] mb-2">
                  High-Voltage Systems
                </h3>

                <p className="text-[#2f355c] text-sm sm:text-base leading-relaxed">
                  Certified technicians trained in safe HV battery service
                  and diagnostics.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#eef1f8] rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row gap-5 mt-5 shadow-sm">
              
              <div className="bg-green-700 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-white text-3xl shrink-0">
                🔋
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#23295b] mb-2">
                  EV Battery Care
                </h3>

                <p className="text-[#2f355c] text-sm sm:text-base leading-relaxed">
                  Advanced battery inspection, maintenance, and performance
                  optimization for modern electric vehicles.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 w-full">
            <img
              src="https://autoexperts.in/wp-content/uploads/2026/05/infraa1.jpg"
              alt="Future Ready"
              className="w-full h-[250px] sm:h-[350px] lg:h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* CERTIFICATIONS SECTION */}
      <div className="  sm:px-6 lg:px-20 py-14 lg:py-20">
        
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#23295b] leading-tight">
            Environmental Certifications
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 max-w-7xl mx-auto">
          
          {certifications.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] py-10 sm:py-14 px-5 sm:px-7 text-center shadow-md hover:shadow-2xl border border-transparent hover:border-green-200 transition-all duration-300"
            >
              
              {/* Icon */}
              <div className="w-16 h-16 mx-auto bg-green-700 rounded-2xl flex items-center justify-center mb-8">
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.586-3.586a2 2 0 010 2.828l-1.172 1.172a2 2 0 00-.586 1.414V15a2 2 0 01-2 2h-1.172a2 2 0 00-1.414.586l-1.172 1.172a2 2 0 01-2.828 0l-1.172-1.172A2 2 0 009 17H7.828a2 2 0 01-2-2v-1.172a2 2 0 00-.586-1.414L4.07 11.242a2 2 0 010-2.828l1.172-1.172A2 2 0 005.828 5.828V4.656a2 2 0 012-2h1.172a2 2 0 001.414-.586L11.586 1.9a2 2 0 012.828 0l1.172 1.172A2 2 0 0017 3.656h1.172a2 2 0 012 2v1.172a2 2 0 00.586 1.414l1.172 1.172z"
                  />
                </svg>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#23295b] mb-3">
                {item.title}
              </h3>

              <p className="text-[#23295b] text-base sm:text-lg">
                {item.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainbility;