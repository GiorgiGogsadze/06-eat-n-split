import { useState } from "react";

export default function AddFriend({ handleAddFriend }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const randomImage = "https://i.pravatar.cc/48";
  const [imgurl, setImgurl] = useState(randomImage);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || imgurl === "") return;
    const id = crypto.randomUUID();
    const friend = {
      id,
      name: name,
      image: imgurl === randomImage ? `${imgurl}?=${id}` : imgurl,
      balance: 0,
    };
    handleAddFriend(friend);
    setName("");
    setImgurl(randomImage);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen ? (
        <form className="form-add-friend" onSubmit={handleSubmit}>
          <label>👫 Friend name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
      ) : null}
      <button className="button" onClick={() => setIsOpen((b) => !b)}>
        {isOpen ? "Close" : "Add friend"}
      </button>
    </>
  );
}
