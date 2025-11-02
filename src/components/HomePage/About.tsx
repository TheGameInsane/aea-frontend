const About = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6">
              <span className="text-xs tracking-widest text-gray-500">
                WHO WE ARE
              </span>
              <h2 className="text-5xl md:text-6xl font-extralight tracking-wider mt-4 mb-8">
                About AEA
              </h2>
              <div className="w-16 h-px bg-white"></div>
            </div>

            <p className="text-lg font-light leading-relaxed text-gray-300 mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
              suscipit vitae est labore, quaerat dignissimos libero et, omnis
              consectetur laborum odit quibusdam ratione deleniti numquam fugiat
              reprehenderit modi quasi aut.
            </p>

            <p className="text-lg font-light leading-relaxed text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem est expedita deserunt libero veritatis excepturi
              quidem natus distinctio eaque neque!
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-sm overflow-hidden ">
              <img
                src="/homepage/plane.jpg"
                alt="Jet Engine"
                className="w-full invert-100 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-8 mt-24">
          {[
            {
              title: "Cultural Events",
              desc: "Lorem, ipsum dolor sit amet consectetur",
            },
            {
              title: "Panel Discussions",
              desc: "Lorem, ipsum dolor sit amet consectetur",
            },
            {
              title: "Podcasts",
              desc: "Lorem, ipsum dolor sit amet consectetur",
            },
            {
              title: "Network",
              desc: "Lorem, ipsum dolor sit amet consectetur",
            },
          ].map((item, idx) => (
            <div key={idx} className="group">
              <div className="border-l border-gray-700 pl-6 py-4 group-hover:border-white transition-colors duration-300">
                <h3 className="text-xl font-light tracking-wider mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
