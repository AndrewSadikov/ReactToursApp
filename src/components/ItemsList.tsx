import { ListItem } from "../models/ListItem";
import SingleItem from "../components/SingleItem";

interface props {
  color: string;
  listItems: Array<ListItem>;
  deleteItem: (id: number) => void;
}

const ItemsList: React.FC<props> = ({ listItems, deleteItem, color }) => {
  return (
    <div className="items">
      {listItems.map((item) => (
        <SingleItem
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          color={color}
        />
      ))}
    </div>
  );
};

export default ItemsList;
