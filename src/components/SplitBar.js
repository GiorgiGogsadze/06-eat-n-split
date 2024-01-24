import { useState } from "react";

export default function SplitBar({ selected, handleBalanceAdd }) {
  const [bill, setBill] = useState("");
  const [expence, SetExpence] = useState("");
  const notExist = bill === "" || expence === "";
  const payedByFriend = notExist ? "" : bill - expence;
  const [pays, setPays] = useState("user");

  const parseNumber = (num) => {
    return num === "" ? "" : +num;
  };
  const handleSplit = (e) => {
    e.preventDefault();
    if (notExist) return;
    const addBalance = pays === "user" ? payedByFriend : -expence;
    handleBalanceAdd(addBalance);
  };
  return (
    <form className="form-split-bill" onSubmit={handleSplit}>
      <h2>SPLIT A BILL WITH {selected.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => {
          setBill(parseNumber(e.target.value));
        }}
      />
      <label>🧍‍♀️ Your expense</label>
      <input
        type="number"
        value={expence}
        onChange={(e) =>
          SetExpence((ex) =>
            +e.target.value <= bill ? parseNumber(e.target.value) : ex
          )
        }
      />
      <label>👫 {selected.name}'s expense</label>
      <input type="number" value={payedByFriend} disabled />
      <label>🤑 Who is paying the bill</label>
      <select value={pays} onChange={(e) => setPays(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selected.name}</option>
      </select>
      <button className="button" type="submit">
        Split bill
      </button>
    </form>
  );
}
