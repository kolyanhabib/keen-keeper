import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">KeenKeeper</h1>

        
        <p className="text-white max-w-4xl mx-auto text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        
        <div className="mt-8">
          <p className="mb-4 text-lg font-medium">Social Links</p>

          <div className="flex justify-center gap-4">
            <div className="bg-white text-[#244D3F] p-3 rounded-full cursor-pointer hover:scale-110 transition">
              <FaInstagram />
            </div>

            <div className="bg-white text-[#244D3F] p-3 rounded-full cursor-pointer hover:scale-110 transition">
              <FaFacebookF />
            </div>

            <div className="bg-white text-[#244D3F] p-3 rounded-full cursor-pointer hover:scale-110 transition">
              <FaXTwitter />
            </div>
          </div>
        </div>

        
        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span className="hover:underline cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:underline cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:underline cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
