import { useState } from "react";

export default function SplitBar({
  friends,
  selected,
  setSelected,
  setFriends,
}) {
  const [bill, setBill] = useState(0);
  const [expence, SetExpence] = useState(0);
  const [pays, setPays] = useState(1);

  if (!selected) return <></>;

  const friend = friends.find((el) => el.id === selected);
  const handleSplit = (e) => {
    e.preventDefault();
    setFriends((f) =>
      f.map((el) =>
        el.id === selected
          ? {
              ...el,
              balance:
                pays === 1
                  ? el.balance + (bill - expence)
                  : el.balance - expence,
            }
          : el
      )
    );
    setBill(0);
    SetExpence(0);
    setSelected(null);
  };
  return (
    <form className="form-split-bill" onSubmit={handleSplit}>
      <h2>SPLIT A BILL WITH {friend.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧍‍♀️ Your expense</label>
      <input
        type="number"
        value={expence}
        onChange={(e) => SetExpence(Number(e.target.value))}
      />
      <label>👫 {friend.name}'s expense</label>
      <input type="number" value={bill - expence} disabled />
      <label>🤑 Who is paying the bill</label>
      <select value={pays} onChange={(e) => setPays(Number(e.target.value))}>
        <option value="1">You</option>
        <option value="2">{friend.name}</option>
      </select>
      <button className="button" type="submit">
        Split bill
      </button>
    </form>
  );
}
