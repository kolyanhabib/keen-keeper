import { useEffect, useState } from "react";
import { FriendsContext } from "./FriendsContext";

const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const [interactions, setInteractions] = useState(() => {
    const saved = localStorage.getItem("interactions");
    return saved ? JSON.parse(saved) : [];
  });

  
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await fetch("/friends.json");
        const data = await res.json();
        setFriends(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFriends();
  }, []);

  
  useEffect(() => {
    localStorage.setItem("interactions", JSON.stringify(interactions));
  }, [interactions]);

  
  const addInteraction = (type, friend) => {
    const newItem = {
      id: Date.now(),
      type, 
      name: friend.name,
      time: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };

    setInteractions((prev) => [newItem, ...prev]);
  };

  return (
    <FriendsContext.Provider
      value={{ friends, loading, interactions, addInteraction }}
    >
      {children}
    </FriendsContext.Provider>
  );
};

export default FriendsProvider;
