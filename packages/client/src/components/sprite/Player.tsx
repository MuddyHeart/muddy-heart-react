interface ICharacter {
  children: JSX.Element;
}

const Player = ({ children }: ICharacter) => {
  return (
    <div>
      <div>Progress Bar...</div>
      {children}
    </div>
  );
};

export default Player;
