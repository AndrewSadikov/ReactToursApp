interface props {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const Title: React.FC<props> = ({ color, setColor }) => {
  const appTitleColor = `app-title ${color}`;
  const colorButtonsColor = `color-buttons ${color}`;

  return (
    <>
      <h1 className={appTitleColor}>Typescript To-Do List</h1>
      <div className={colorButtonsColor}>
        <button onClick={() => setColor("blue")}>Blue</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("red")}>Pink</button>
        <button onClick={() => setColor("orange")}>Orange</button>
      </div>
    </>
  );
};

export default Title;
