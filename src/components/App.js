import { useState } from "react";
import SplitBar from "./SplitBar";
import FriendsList from "./FriendsList";
import AddFriend from "./AddFriend";

const initialFriends = [
  {
    id: "118836",
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: "933372",
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: "499476",
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selected, setSelected] = useState(null);
  const handleAddFriend = (friend) => {
    setFriends((f) => [...f, friend]);
  };
  const handleBalanceAdd = (addBalance) => {
    setFriends((f) =>
      f.map((el) =>
        el.id === selected.id ? { ...el, balance: el.balance + addBalance } : el
      )
    );
    setSelected(null);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selected={selected}
          setSelected={setSelected}
        />
        <AddFriend handleAddFriend={handleAddFriend} />
      </div>
      {selected ? (
        <SplitBar selected={selected} handleBalanceAdd={handleBalanceAdd} />
      ) : null}
    </div>
  );
}
