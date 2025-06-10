const LocationExcellence = ({ data, mapImage }) => {
  return (
    <section className="w-full px-6 lg:px-20 bg-white">
      <div className="flex flex-col lg:flex-row lg:gap-16 gap-8 items-start">
        {/* Map Image */}
        <div className="w-full lg:w-5/12">
          <img
            src={mapImage}
            alt="Location Map"
            className="w-full lg:h-[27.5rem]"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-7/12">
          <p className="text-sm text-[#b2784a] mb-3 lg:mt-6">
            LOREM IPSUM DOLOR SIT AMET
          </p>
          <h2 className="text-2xl lg:text-4xl font-medium text-gray-800 mb-6">
            Location Excellence
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data?.map((loc, index) => (
              <div
                key={index}
                className="border rounded-lg p-2.5 shadow-sm flex items-center"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 flex justify-center items-center bg-[#b2784a] text-white text-2xl rounded-full">
                    {loc.icon}
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-800">
                      {loc.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-snug">
                      {loc.items.map((item, idx) => (
                        <span key={idx}>
                          {item}
                          {idx < loc.items.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationExcellence;
