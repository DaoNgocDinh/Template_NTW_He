import Row from "./OrderRow";

function Table({ items, remove, setEditing }) {
    return(
        <table className="table table-hover">
      <thead className="table-active">
        <tr>
          <th>KHACH HANG</th>
          <th>DO UONG</th>
          <th>KICH THUOC</th>
          <th>TRẠNG THÁI</th>
          <th>GHI CHU</th>
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