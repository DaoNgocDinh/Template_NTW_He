import Row from "./OrderRow";

function Table({ items, remove, setEditing }) {
    return(
        <table className="table table-hover">
      <thead className="table-active">
        <tr>
          <th>#</th>
          <th>KHÁCH HÀNG</th>
          <th>ĐỒ UỐNG</th>
          <th>KÍCH THƯỚC</th>
          <th>TRẠNG THÁI</th>
          <th>GHI CHÚ</th>
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