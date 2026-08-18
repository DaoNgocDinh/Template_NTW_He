import Row from "./ShipmentRow";

function Table({ items, remove, setEditing }) {
    return(
        <table className="table table-hover">
      <thead className="table-active">
        <tr>
          <th>#</th>
          <th>MÃ ĐƠN</th>
          <th>NGƯỜI NHẬN</th>
          <th>ĐỊA ĐIỂM</th>
          <th>TRẠNG THÁI</th>
          <th>HÀNH ĐỘNG</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <Row
            key={item.id}
            item={item}
            remove={remove}
            setEditing={setEditing}
          />
        ))}
      </tbody>
    </table>
    );
}

export default Table;