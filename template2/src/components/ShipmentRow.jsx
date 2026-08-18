function Row({ item, remove, setEditing }) {
    return (
        <div className="card">

            <div className="card-body">

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <strong className="fs-5">
                        {item.order}
                    </strong>

                    <span className="border border-2 border-dark rounded-2 px-3 py-1 fw-bold">
                        {item.status}
                    </span>
                </div>

                <div className="row g-3">

                    <div className="col-md-4">
                        <small className="text-muted">
                            NGƯỜI NHẬN
                        </small>

                        <div className="fw-bold">
                            {item.receiver}
                        </div>
                    </div>

                    <div className="col-md-4">
                        <small className="text-muted">
                            ĐỊA ĐIỂM
                        </small>

                        <div className="fw-bold">
                            {item.address}
                        </div>
                    </div>

                    <div className="col-md-4">
                        <small className="text-muted">
                            MÃ ĐƠN
                        </small>

                        <div className="fw-bold">
                            {item.id}
                        </div>
                    </div>

                </div>

                <hr />

                <div className="d-flex justify-content-end gap-2">

                    <button
                        className="btn btn-primary btn-sm"
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

                </div>

            </div>

        </div>
    );
}

export default Row;