export default function Friend({
  friend: { id, name, image, balance },
  selected,
  setSelected,
}) {
  const isSeleted = selected?.id === id;
  return (
    <li className={isSeleted ? "selected" : ""}>
      <img src={image} alt={name} />
      <h3>{name}</h3>

      {balance === 0 && <p>You and {name} are even</p>}
      {balance > 0 && (
        <p className="green">
          {name} owes you {balance}€
        </p>
      )}
      {balance < 0 && (
        <p className="red">
          You owe {name} {-balance}€
        </p>
      )}

      <button
        className="button"
        onClick={() =>
          setSelected(isSeleted ? null : { id, name, image, balance })
        }
      >
        {isSeleted ? "Close" : "Select"}
      </button>
    </li>
  );
}
