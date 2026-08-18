import { useState, useEffect } from "react";
import Header from "./components/Header";
import Table from "./components/OrderTable";
import Filter from "./components/FilterTabs";
import Form from "./components/OrderForm";
import "./App.css";

import data from "./data/data";

function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");

    if (saved) {
      return JSON.parse(saved);
    }

    return data;
  });
  const [editing, setEditing] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const filters = [...new Set(items.map((item) => item.trangthai))];

  const displayed = items.filter((item) => {
    const matchesFilter = !selectedFilter || item.trangthai === selectedFilter;

    return matchesFilter;
  });

  const add = (newItem) => {
    if (editing) {
      setItems(
        items.map((item) =>
          item.id === editing.id ? { ...newItem, id: editing.id } : item,
        ),
      );
      setEditing(null);
    } else {
      setItems([
        ...items,
        {
          ...newItem,
          id: Date.now(),
        },
      ]);
    }
  };

  const remove = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const cancelEdit = () => {
    setEditing(null);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <div className="d-flex gap-3 m-2">
          <Form add={add} editing={editing} onCancel={cancelEdit} />
          <div className="card rounded border border-1 w-100">
            <div className="card-header d-flex flex-column">
              <strong className="mt-1">Danh sách đơn vận chuyển</strong>
              <label className="mb-1">Tìm kiếm và lọc theo trạng thái</label>
            </div>
            <div className="border-bottom">
              <div className="d-flex justify-content-lg-between align-items-center mt-3 ms-2 me-2">
                <Filter
                  filters={filters}
                  value={selectedFilter}
                  onChange={setSelectedFilter}
                />
              </div>
            </div>
            <Table items={displayed} remove={remove} setEditing={setEditing} />
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
