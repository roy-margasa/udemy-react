import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  let editText = 'Edit';

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    console.log(isEditing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    // console.log(event);
    setPlayerName(event.target.value);
  }

  const playerNameDisplay = <span className="player-name">{playerName}</span>;

  const playerNameInput = (
    <input type="text" required value={playerName} onChange={handleChange} />
  );

  let playerRender = playerNameDisplay;

  if (isEditing) {
    editText = 'Save';
    playerRender = playerNameInput;
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerRender}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{editText}</button>
    </li>
  );
}
