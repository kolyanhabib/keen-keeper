import { Link } from "react-router-dom";

const getStatusStyle = (status) => {
  if (status === "Overdue") return "bg-red-500 text-white";
  if (status === "Almost Due") return "bg-orange-400 text-white";
  if (status === "On-Track") return "bg-green-700 text-white";
};

const FriendCard = ({ friend }) => {
  return (
    <Link to={`/friends/${friend.id}`}>
      <div className="bg-white rounded-lg p-6 text-center shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
        />

        <h3 className="font-semibold text-lg text-[#1F2937]">{friend.name}</h3>

        <p className="text-sm text-gray-500 mt-1">
          {friend.days_since_contact}d ago
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {friend.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        <div className="mt-4">
          <span
            className={`text-xs px-3 py-1 rounded-full ${getStatusStyle(friend.status)}`}
          >
            {friend.status}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
