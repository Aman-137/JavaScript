import { useState } from "react";
import ItemList from "./ItemList";
import "./styles.css";

export default function App() {
  const [listA, setListA] = useState({
    HTML: false,
    CSS: false,
    JavaScript: false,
    TypeScript: false
  });

  const [listB, setListB] = useState({
    React: false,
    Angular: false,
    Vue: false,
    Svelte: false
  });

  // console.log(listA, listB);
  // console.log(listB);

  const hasNoSelectedItem = (list) => {
    for (let key in list) {
      if (list[key] === true) {
        return false;
      }
    }
    return true;
  };

  const transferCheckedItems = (from, setFrom, to, setTo) => {
    const transferFrom = { ...from },
      transferTo = { ...to };

    for (let key in transferFrom) {
      if (transferFrom[key] === true) {
        transferTo[key] = transferFrom[key];
        delete transferFrom[key];
      }
    }

    setTo(transferTo);
    setFrom(transferFrom);
  };

  return (
    <div className="container">
      <ItemList list={listA} setList={setListA} />

      <div className="buttons">
        <button
          disabled={Object.keys(listB).length === 0}
          onClick={() => {
            setListA({ ...listA, ...listB });
            setListB({});
          }}
        >
          {"<<"}
        </button>
        <button
          disabled={hasNoSelectedItem(listB)}
          onClick={() => transferCheckedItems(listB, setListB, listA, setListA)}
        >
          {"<"}
        </button>
        <button
          disabled={hasNoSelectedItem(listA)}
          onClick={() => transferCheckedItems(listA, setListA, listB, setListB)}
        >
          {">"}
        </button>
        <button
          disabled={Object.keys(listA).length === 0}
          onClick={() => {
            setListB({ ...listB, ...listA });
            setListA({});
          }}
        >
          {">>"}
        </button>
      </div>

      <ItemList list={listB} setList={setListB} />
    </div>
  );
}
