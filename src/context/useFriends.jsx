import { useContext } from "react";
import { FriendsContext } from "./FriendsContext";

const useFriends = () => {
  return useContext(FriendsContext);
};

export default useFriends;
