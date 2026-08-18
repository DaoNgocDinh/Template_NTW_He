import Row from "./ActivityRow";

function Table({ items, remove, setEditing }) {
    return(
        <table className="table table-hover">
      <thead className="table-active">
        <tr>
          <th>#</th>
          <th>HOẠT ĐỘNG</th>
          <th>CÂU LẠC BỘ</th>
          <th>HÌNH THỨC</th>
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