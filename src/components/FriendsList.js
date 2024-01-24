import Friend from "./Friend";

export default function FriendsList({ friends, selected, setSelected }) {
  return (
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
  );
}
