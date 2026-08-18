function Row({ item, remove, setEditing }) {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.hoatdong}</td>
            <td>{item.clb}</td>
            <td>{item.hinhthuc}</td>
            <td><strong className="rounded-2 border border-2 border-black px-3 py-1">{item.trangthai}</strong></td>

            <td>
                <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => setEditing(item)}
                >
                    Sửa
                </button>

                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => remove(item.id)}
                >
                    Xóa
                </button>
            </td>
        </tr>
    );
}

export default Row;