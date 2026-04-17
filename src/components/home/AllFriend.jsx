import { GridLoader } from "react-spinners";
import useFriends from "../../context/useFriends";
import StatsSection from "../friends/StatsSection";
import FriendsGrid from "../friends/FriendsGrid";

const AllFriend = () => {
  const { friends, loading } = useFriends();

  console.log("friends:", friends);
  console.log("loading:", loading);
  if (loading) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <GridLoader size={20} color="#244D3F" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <StatsSection friends={friends} />

      <div className="divider my-10"></div>

      <h2 className="text-2xl font-bold mb-6 text-[#1F2937]">Your Friends</h2>

      <FriendsGrid friends={friends} />
    </div>
  );
};

export default AllFriend;
