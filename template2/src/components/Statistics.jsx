function Statistics({items}){
    const tongDon = items.length;

    const dangGiao = items.filter(
        (item) => item.status === "Đang giao"
    ).length;

    const daGiao = items.filter(
        (item) => item.status === "Đã giao"
    ).length;

    return (
        <div className="d-flex gap-2 m-2">
            <div className="align-items-center d-flex flex-column rounded border border-2 py-3 flex-grow-1">
                <strong>{tongDon}</strong>
                <lable>TỔNG ĐƠN</lable>
            </div>
            <div className="align-items-center d-flex flex-column rounded border border-2 py-3 flex-grow-1">
                <strong>{dangGiao}</strong>
                <lable>ĐANG GIAO</lable>
            </div>
            <div className="align-items-center d-flex flex-column rounded border border-2 py-3 flex-grow-1">
                <strong>{daGiao}</strong>
                <lable>ĐÃ GIAO</lable>
            </div>
        </div>
    )
}

export default Statistics;