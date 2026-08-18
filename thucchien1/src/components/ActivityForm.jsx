import { useEffect, useState } from "react";

function Form({ add, editing, onCancel }) {
    const [hoatdong, setHoatDong] = useState("");
    const [clb, setCLB] = useState("");
    const [hinhthuc, setHinhthuc] = useState("Trực tiếp");
    const [trangthai, setTrangthai] = useState("Sắp diễn ra");

    const resetForm = () => {
        setHoatDong("");
        setCLB("");
        setHinhthuc("Trực tiếp");
        setTrangthai("Sắp diễn ra");
    };

    useEffect(() => {
        if (editing) {
            setHoatDong(editing.hoatdong);
            setCLB(editing.clb);
            setHinhthuc(editing.hinhthuc);
            setTrangthai(editing.trangthai);
        } else {
            resetForm();
        }
    }, [editing]);

    const submit = (e) => {
        e.preventDefault();

        if (!hoatdong.trim()) {
            alert("Vui lòng nhập mã đơn");
            return;
        }

        if (!clb.trim()) {
            alert("Vui lòng nhập tên người nhận");
            return;
        }

        if (!hinhthuc) {
            alert("Vui lòng chọn địa chỉ");
            return;
        }

        add({
            hoatdong,
            clb,
            hinhthuc,
            trangthai,
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
        <div className="card mb-3">
            <div className="card-header d-flex flex-column">
                <strong>{editing ? "Sửa đơn hàng" : "Tạo đơn hàng"}</strong>
                <label>Nhập thông tin vận chuyển</label>
            </div>

            <div className="card-body">
                <form onSubmit={submit}>
                    <div className="row g-3 d-flex flex-column">
                        <div>
                            <label className="form-label fw-bold">
                                Tên hoạt động
                            </label>
                            <input
                                className="form-control w-100"
                                placeholder="Nhập tên hoạt động"
                                value={hoatdong}
                                onChange={(e) => setHoatDong(e.target.value)}
                                required
                                minLength={3}
                                maxLength={30}
                            />
                        </div>

                        <div>
                            <label className="form-label fw-bold">
                                Câu lạc bộ
                            </label>

                            <select
                                className="form-select"
                                value={clb}
                                onChange={(e) => setCLB(e.target.value)}
                                required
                            >
                                <option value="">
                                    Chọn câu lạc bộ
                                </option>

                                <option value="CLB IT">
                                    Câu lạc bộ IT
                                </option>

                                <option value="CLB thể thao">
                                    Câu lạc bộ thể thao
                                </option>

                                <option value="CLB nghệ thuật">
                                    Câu lạc bộ nghệ thuật
                                </option>

                                <option value="CLB tình nguyện">
                                    Câu lạc bộ tình nguyện
                                </option>
                            </select>
                        </div>

                        <div>
                            <label className="form-label fw-bold">
                                Hình thức
                            </label>

                            <div className="d-flex gap-3 mt-2">

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="hinhthuc"
                                        value="Trực tiếp"
                                        checked={hinhthuc === "Trực tiếp"}
                                        onChange={(e) => setHinhthuc(e.target.value)}
                                    />

                                    <label className="form-check-label">
                                        Trực tiếp
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="hinhthuc"
                                        value="Trực tuyến"
                                        checked={hinhthuc === "Trực tuyến"}
                                        onChange={(e) => setHinhthuc(e.target.value)}
                                    />

                                    <label className="form-check-label">
                                        Trực tuyến
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="form-label fw-bold">
                                Trạng thái
                            </label>

                            <select
                                className="form-select"
                                value={trangthai}
                                onChange={(e) => setTrangthai(e.target.value)}
                                required
                            >
                                <option value="Sắp diễn ra">
                                    Sắp diễn ra
                                </option>

                                <option value="Đang diễn ra">
                                    Đang diễn ra
                                </option>

                                <option value="Hoàn thành">
                                    Hoàn thành
                                </option>

                                <option value="Đã hủy">
                                    Đã hủy
                                </option>
                            </select>
                        </div>


                        <div className="col-md-4 w-100">
                            <div className="d-flex gap-2">
                                <button className="btn btn-dark w-100 text-white" type="submit">
                                    {editing ? "Cập nhật" : "Thêm hoạt động"}
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