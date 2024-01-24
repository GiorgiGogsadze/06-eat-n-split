import  AddFriend from "./AddFriend";
import Friend from "./Friend";

export default function SideBar({
  friends,
  handleAddFriend,
  selected,
  setSelected,
}) {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((el) => (
          <Friend
            friend={el}
            key={el.id}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <AddFriend handleAddFriend={handleAddFriend} />
    </div>
  );
}
