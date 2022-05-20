import { FaPlusSquare } from "react-icons/fa";

interface props {
  listItem: string;
  setListItem: React.Dispatch<React.SetStateAction<string>>;
  addItem: (e: React.FormEvent) => void;
}

const InputField: React.FC<props> = ({ listItem, setListItem, addItem }) => {
  return (
    <form className="form" onSubmit={(e) => addItem(e)}>
      <input
        className="input"
        value={listItem}
        onChange={(e) => setListItem(e.target.value)}
      ></input>
      <button className="submit-button" type="submit">
        <FaPlusSquare />
      </button>
    </form>
  );
};

export default InputField;
