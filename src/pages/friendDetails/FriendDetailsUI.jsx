import useFriends from "../../context/useFriends";
import { FiArchive, FiTrash2, FiVideo, FiEdit } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineTextsms } from "react-icons/md";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { toast } from "react-toastify";

const getStatusStyle = (status) => {
  if (status === "Overdue") return "bg-red-500 text-white";
  if (status === "Almost Due") return "bg-orange-400 text-white";
  if (status === "On-Track") return "bg-green-700 text-white";
};

const FriendDetailsUI = ({ friend, formattedDate }) => {
  const { addInteraction } = useFriends();

  const handleCall = () => {
    addInteraction("Call", friend);

    toast.success(
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <BiPhoneCall />
        <span>Calling with {friend.name}</span>
      </div>,
    );
  };

  const handleText = () => {
    addInteraction("Text", friend);

    toast.success(
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <MdOutlineTextsms />
        <span>Sending message to {friend.name}</span>
      </div>,
    );
  };

  const handleVideo = () => {
    addInteraction("Video", friend);

    toast.success(
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <FiVideo />
        <span>Starting video with {friend.name}</span>
      </div>,
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
            />

            <h2 className="text-xl font-semibold text-[#1F2937]">
              {friend.name}
            </h2>

            <span
              className={`inline-block mt-2 text-xs px-3 py-1 rounded-full ${getStatusStyle(
                friend.status,
              )}`}
            >
              {friend.status}
            </span>

            <div className="mt-2">
              {friend.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full mr-1"
                >
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>

            <p className="text-gray-500 italic mt-4 text-sm">"{friend.bio}"</p>

            <p className="text-gray-400 text-sm mt-1">{friend.email}</p>
          </div>

          <div className="space-y-2">
            <button className="w-full bg-white flex items-center justify-center gap-2 text-[#1F2937] font-medium text-[16px]  shadow-sm rounded-sm py-2 hover:bg-gray-100 cursor-pointer">
              <RiNotificationSnoozeLine />
              Snooze 2 Weeks
            </button>

            <button className="w-full bg-white flex items-center justify-center gap-2  text-[#1F2937] font-medium text-[16px]  shadow-sm  py-2 hover:bg-gray-100 cursor-pointer">
              <FiArchive /> Archive
            </button>

            <button className="w-full bg-white flex items-center justify-center gap-2 font-medium text-[16px] shadow-sm py-2 text-red-500 hover:bg-red-50 cursor-pointer">
              <FiTrash2 /> Delete
            </button>
          </div>
        </div>

        <div className="md:col-span-1 lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-5 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-[#244D3F]">
                {friend.days_since_contact}
              </h3>
              <p className="text-gray-500 text-sm mt-1">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-lg p-5 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-[#244D3F]">
                {friend.goal}
              </h3>
              <p className="text-gray-500 text-sm mt-1">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-lg p-5 text-center shadow-sm">
              <h3 className="text-lg font-bold text-[#244D3F]">
                {formattedDate}
              </h3>
              <p className="text-gray-500 text-sm mt-1">Next Due</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-[#244D3F]">
                Relationship Goal
              </h3>
              <p className="text-gray-600 mt-1">
                Connect every{" "}
                <span className="font-semibold text-black">
                  {friend.goal} days
                </span>
              </p>
            </div>

            <button className="bg-[#F8FAFC] text-[#1F2937] font-medium text-[16px] py-2 px-3 border border-gray-100 rounded-sm shadow-sm flex items-center gap-1 hover:bg-gray-100 cursor-pointer">
              <FiEdit /> Edit
            </button>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#244D3F] mb-4">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
              <div
                onClick={handleCall}
                className="bg-[#e9e9e93a] border border-gray-200 rounded-lg py-6 flex flex-col items-center gap-2 hover:bg-gray-100 cursor-pointer"
              >
                <BiPhoneCall size={26} />
                Call
              </div>

              <div
                onClick={handleText}
                className="bg-[#e9e9e959] border border-gray-200  rounded-lg py-6 flex flex-col items-center gap-2 hover:bg-gray-100 cursor-pointer "
              >
                <MdOutlineTextsms size={26} />
                Text
              </div>

              <div
                onClick={handleVideo}
                className="bg-[#e9e9e959] border border-gray-200  rounded-lg py-6 flex flex-col items-center gap-2 hover:bg-gray-100 cursor-pointer "
              >
                <FiVideo size={26} />
                Video
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsUI;
