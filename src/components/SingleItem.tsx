import { ListItem } from "../models/ListItem";
import { FaCheck, FaTrash } from "react-icons/fa";

interface props {
  color: string;
  item: ListItem;
  deleteItem: (id: number) => void;
}

const SingleItem: React.FC<props> = ({ item, deleteItem, color }) => {
  const itemBoxColor = `item-box ${color}`;

  const completeItem = () => {
    item.completed = !item.completed;
    deleteItem(-1);
  };

  return (
    <div className={itemBoxColor}>
      <div className={!item.completed ? "item" : "item-completed"}>
        <h3>{item.item}</h3>
        <div>
          <FaCheck className="icon" onClick={() => completeItem()} />
          <FaTrash className="icon" onClick={() => deleteItem(item.id)} />
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
