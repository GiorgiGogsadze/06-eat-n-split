import { useState } from "react";
import SplitBar from "./SplitBar";
import SideBar from "./SideBar";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selected, setSelected] = useState();
  const handleAddFriend = (friend) => {
    setFriends((f) => [...f, friend]);
  };
  return (
    <div className="app">
      <SideBar
        friends={friends}
        handleAddFriend={handleAddFriend}
        selected={selected}
        setSelected={setSelected}
      />
      <SplitBar
        friends={friends}
        setFriends={setFriends}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}
