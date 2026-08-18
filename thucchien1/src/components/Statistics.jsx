function Statistics({items}){
    const tongHoatDong = items.length;

    const sapDienRa = items.filter(
        (item) => item.trangthai === "Sắp diễn ra"
    ).length;

    const hoanThanh = items.filter(
        (item) => item.trangthai === "Hoàn thành"
    ).length;

    return (
        <div className="d-flex gap-2 m-2">
            <div className="align-items-center d-flex flex-column rounded border border-2 py-3 flex-grow-1">
                <strong>{tongHoatDong}</strong>
                <lable>TỔNG HOẠT ĐỘNG</lable>
            </div>
            <div className="align-items-center d-flex flex-column rounded border border-2 py-3 flex-grow-1">
                <strong>{sapDienRa}</strong>
                <lable>SẮP DIỄN RA</lable>
            </div>
            <div className="align-items-center d-flex flex-column rounded border border-2 py-3 flex-grow-1">
                <strong>{hoanThanh}</strong>
                <lable>HOÀN THÀNH</lable>
            </div>
        </div>
    )
}

export default Statistics;