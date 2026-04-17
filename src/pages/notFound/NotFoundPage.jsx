import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  const navigate = useNavigate();

  // just use this console for remove eslint error

  console.log("motion:", motion);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white px-4">
      <div className="text-center max-w-xl">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[100px] md:text-[140px] font-extrabold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-semibold mb-3"
        >
          Page Not Found
        </motion.h2>

        <p className="text-gray-400 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition font-medium shadow-md"
          >
            Go Home
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 rounded-lg border border-gray-500 hover:bg-cyan-500 transition cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
