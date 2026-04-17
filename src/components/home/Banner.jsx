import { FiPlus } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto text-center pt-24 px-4 ">
      <h1 className="font-bold text-4xl md:text-5xl text-[#1F2937] leading-tight">
        Friends to keep close in your life
      </h1>

      <p className="text-[#64748B] text-[16px] mt-4 max-w-2xl mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <div className="flex justify-center ">
        <button className="bg-[#244D3F] hover:bg-[#1e3f34] transition text-white font-semibold py-2.5 px-5 rounded-md mt-8 flex items-center gap-2 shadow-sm cursor-pointer">
          <FiPlus size={18} />
          Add a Friend
        </button>
      </div>
    </div>
  );
};

export default Banner;
