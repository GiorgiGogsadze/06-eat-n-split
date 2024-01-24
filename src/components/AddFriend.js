import {useState} from "react";

export default function AddFriend({ handleAddFriend }) {
  const [isOpen, setIsOpen] = useState(false);
  const [fName, setFName] = useState("");
  const randomImage = "https://i.pravatar.cc/48";
  const [imgurl, setImgurl] = useState(randomImage);

  if (!isOpen)
    return (
      <button className="button" onClick={() => setIsOpen(true)}>
        Add friend
      </button>
    );

  const addFriend = (e) => {
    e.preventDefault();
    if (fName === "" || imgurl === "") return;
    const friend = { id: Date.now(), name: fName, image: imgurl, balance: 0 };
    handleAddFriend(friend);
    setFName("");
    setImgurl(randomImage);
    setIsOpen(false);
  };

  return (
    <>
      <form className="form-add-friend" onSubmit={addFriend}>
        <label>👫 Friend name</label>
        <input
          type="text"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        />
        <label>🌄 Image URL</label>
        <input
          type="text"
          value={imgurl}
          onChange={(e) => setImgurl(e.target.value)}
        />
        <button className="button" type="submit">
          Add
        </button>
      </form>
      <button className="button" onClick={() => setIsOpen(false)}>
        Close
      </button>
    </>
  );
}
