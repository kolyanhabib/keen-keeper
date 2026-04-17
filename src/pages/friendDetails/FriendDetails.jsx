import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GridLoader } from "react-spinners";
import FriendDetailsUI from "../../pages/friendDetails/FriendDetailsUI";
import { Link } from "react-router";

const FriendDetails = () => {
  const { id } = useParams();

  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchFriend = async () => {
      try {
        const res = await fetch("/friends.json");
        const data = await res.json();
        const found = data.find((f) => f.id === Number(id));
        setFriend(found);
      } finally {
        setLoading(false);
      }
    };

    fetchFriend();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <GridLoader size={20} color="#244D3F" />
      </div>
    );
  }

 if (!friend) {
   return (
     <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
       <div className="text-6xl mb-4">😵</div>

       <h2 className="text-2xl font-semibold text-[#1F2937]">
         Friend Not Found
       </h2>

       <p className="text-gray-500 mt-2 max-w-sm">
         Looks like this friend doesn’t exist… or maybe they ghosted you 👻
       </p>

       <div className="flex gap-3 mt-6">
         <button
           onClick={() => window.history.back()}
           className="px-5 py-2 rounded-md bg-gray-100 hover:bg-[#244D3F] hover:text-white transition cursor-pointer"
         >
           Go Back
         </button>

         <Link
           to="/"
           className="px-5 py-2 rounded-md bg-[#244D3F] text-white hover:opacity-90 transition"
         >
           Go Home
         </Link>
       </div>
     </div>
   );
 }
  const d = new Date(friend.next_due_date);
  const formattedDate = `${d.getDate()} ${d.toLocaleString("en-US", {
    month: "long",
  })}, ${d.getFullYear()}`;

  return <FriendDetailsUI friend={friend} formattedDate={formattedDate} />;
};

export default FriendDetails;
