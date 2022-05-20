import "./Styles.css";
import { useState } from "react";
import InputField from "./components/InputField";
import ItemsList from "./components/ItemsList";
import Title from "./components/Title";
import { ListItem } from "./models/ListItem";

const App: React.FC = () => {
  const [color, setColor] = useState<string>("green");
  const [listItem, setListItem] = useState<string>("");
  const [listItems, setListItems] = useState<Array<ListItem>>([]);

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();

    if (listItem) {
      setListItems([
        ...listItems,
        { id: Date.now(), item: listItem, completed: false },
      ]);
      setListItem("");
    }
  };

  const deleteItem = (id: number) => {
    const items = listItems.filter((thing) => thing.id !== id);
    setListItems(items);
  };

  return (
    <div className="app">
      <div className="list">
        <Title setColor={setColor} color={color} />
        <InputField
          listItem={listItem}
          setListItem={setListItem}
          addItem={addItem}
        />
        <ItemsList
          listItems={listItems}
          deleteItem={deleteItem}
          color={color}
        />
      </div>
    </div>
  );
};

export default App;
