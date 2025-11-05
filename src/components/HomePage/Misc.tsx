import { Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Misc = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <Trophy className="w-16 h-16 mx-auto mb-8 text-gray-400" />
          <span className="text-xs tracking-widest text-gray-500">
            ANNUAL COMPETITION
          </span>
          <h2 className="text-5xl md:text-6xl font-extralight tracking-wider mt-4 mb-8">
            T-Shirt Design Poll
          </h2>
          <div className="w-16 h-px bg-white mx-auto mb-8"></div>
        </div>

        <p className="text-lg font-light text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Our community has submitted exceptional designs for this year's
          official merchandise. Your vote shapes the identity we wear with
          pride.
        </p>

        <Link
          to={"/vote"}
          className="group relative inline-flex items-center text-sm tracking-widest border border-white px-12 py-5 hover:bg-white hover:text-black transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10">LOGIN WITH SMAIL TO VOTE</span>
        </Link>

        <p className="text-xs text-gray-600 mt-6 tracking-wide">
          Secure authentication required • One vote per member
        </p>
      </div>
    </>
  );
};

export default Misc;
