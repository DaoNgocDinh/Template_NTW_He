import { useEffect, useState } from "react";

function Form({ add, editing, onCancel }) {
    const [order, setOrder] = useState("");
    const [receiver, setReceiver] = useState("");
    const [address, setAddress] = useState("");
    const [status, setStatus] = useState("Chờ lấy");

    const resetForm = () => {
        setOrder("");
        setReceiver("");
        setAddress("");
        setStatus("Chờ lấy");
    };

    useEffect(() => {
        if (editing) {
            setOrder(editing.order);
            setReceiver(editing.receiver);
            setAddress(editing.address);
            setStatus(editing.status);
        } else {
            resetForm();
        }
    }, [editing]);

    const submit = (e) => {
        e.preventDefault();

        if (!order.trim()) {
            alert("Vui lòng nhập mã đơn");
            return;
        }

        if (!receiver.trim()) {
            alert("Vui lòng nhập tên người nhận");
            return;
        }

        if (!address) {
            alert("Vui lòng chọn địa chỉ");
            return;
        }

        add({
            order,
            receiver,
            address,
            status,
        });

        resetForm();
    }

    const handleCancel = () => {
        resetForm();
        if (onCancel) {
            onCancel();
        }
    };

    return (
        <div className="card mb-3 w-25">
            <div className="card-header d-flex flex-column">
                <strong>{editing ? "Sửa đơn hàng" : "Tạo đơn hàng"}</strong>
                <label>Nhập thông tin vận chuyển</label>
            </div>

            <div className="card-body">
                <form onSubmit={submit}>
                    <div className="row g-3 d-flex flex-column">
                        <div>
                            <label className="form-label fw-bold">
                                Nhập mã đơn
                            </label>
                            <input
                                className="form-control w-100"
                                placeholder="Nhập mã đơn"
                                value={order}
                                onChange={(e) => setOrder(e.target.value)}
                                required
                                minLength={3}
                                maxLength={30}
                            />
                        </div>

                        <div>
                            <label className="form-label fw-bold">
                                Tên người nhận
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập tên người nhận"
                                value={receiver}
                                onChange={(e) => setReceiver(e.target.value)}
                                required
                                minLength={3}
                                maxLength={30}
                                pattern="[A-Za-zÀ-ỹ\s]+"
                            />
                        </div>

                        <div>
                            <label className="form-label fw-bold">
                                Địa chỉ
                            </label>

                            <select
                                className="form-select"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)
                                }
                                required
                            >
                                <option value="">
                                    -- Chọn địa chỉ --
                                </option>

                                <option value="Hà Nội">
                                    Hà Nội
                                </option>

                                <option value="Hải Phòng">
                                    Hải Phòng
                                </option>

                                <option value="Đà Nẵng">
                                    Đà Nẵng
                                </option>

                                <option value="TP.HCM">
                                    TP.HCM
                                </option>

                                <option value="Cần Thơ">
                                    Cần Thơ
                                </option>
                            </select>
                        </div>

                        <div>
                            <label className="form-label fw-bold">
                                Trạng thái
                            </label>

                            <div className="d-flex gap-3 mt-2">

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="status"
                                        value="Chờ lấy"
                                        checked={status === "Chờ lấy"}
                                        onChange={(e) => setStatus(e.target.value)}
                                    />

                                    <label className="form-check-label">
                                        Chờ lấy
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="status"
                                        value="Đang giao"
                                        checked={status === "Đang giao"}
                                        onChange={(e) => setStatus(e.target.value)}
                                    />

                                    <label className="form-check-label">
                                        Đang giao
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="status"
                                        value="Đã giao"
                                        checked={status === "Đã giao"}
                                        onChange={(e) => setStatus(e.target.value)}
                                    />

                                    <label className="form-check-label">
                                        Đã giao
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="status"
                                        value="Đã hủy"
                                        checked={status === "Đã hủy"}
                                        onChange={(e) => setStatus(e.target.value)}
                                    />

                                    <label className="form-check-label">
                                        Đã hủy
                                    </label>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4 w-100">
                            <div className="d-flex gap-2">
                                <button className="btn btn-dark w-100 text-white" type="submit">
                                    {editing ? "Cập nhật" : "Thêm mới"}
                                </button>
                                <button
                                    className="btn btn-outline-secondary w-100"
                                    type="button"
                                    onClick={handleCancel}
                                >
                                    Hủy
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;

{/* <input required />
<input minLength={3} />
<input maxLength={50} />
<input type="text"/>
<input type="number" />
<input type="email"/>
<input pattern="[A-Za-zÀ-ỹ\s]+"/>
<input pattern="[0-9]+" /> 
<input pattern="0[0-9]{9}"/>
*/}