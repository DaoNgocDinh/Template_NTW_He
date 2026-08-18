import { useEffect, useState } from "react";

function Form({ add, editing, onCancel }) {
  const [khachhang, setKhachhang] = useState("");
  const [douong, setDouong] = useState("");
  const [kichthuoc, setKichthuoc] = useState("Nhỏ");
  const [trangthai, setTrangthai] = useState("Chờ xử lý");
  const [ghichu, setGhichu] = useState("");

  const resetForm = () => {
    setKhachhang("");
    setDouong("");
    setKichthuoc("Nhỏ");
    setTrangthai("Chờ xử lý");
    setGhichu("");
  };

  useEffect(() => {
    if (editing) {
      setKhachhang(editing.khachhang);
      setDouong(editing.douong);
      setKichthuoc(editing.kichthuoc);
      setTrangthai(editing.trangthai);
      setGhichu(editing.ghichu);
    } else {
      resetForm();
    }
  }, [editing]);

  const submit = (e) => {
    e.preventDefault();

    add({
      khachhang,
      douong,
      kichthuoc,
      trangthai,
      ghichu,
    });

    resetForm();
  };

  const handleCancel = () => {
    resetForm();
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className="card mb-3 w-25">
      <div className="card-header d-flex flex-column">
        <strong>{editing ? "Sửa đơn hàng" : "Đơn hàng mới"}</strong>
        <label>Nhập thông tin đơn hàng</label>
      </div>

      <div className="card-body">
        <form onSubmit={submit}>
          <div className="row g-3 d-flex flex-column">
            <div>
              <label className="form-label fw-bold">Tên khách hàng</label>
              <input
                className="form-control w-100"
                placeholder="Nhập tên khách hàng"
                value={khachhang}
                onChange={(e) => setKhachhang(e.target.value)}
                required
                minLength={3}
                maxLength={30}
              />
            </div>

            <div>
              <label className="form-label fw-bold">Loại đồ uống</label>

              <select
                className="form-select"
                value={douong}
                onChange={(e) => setDouong(e.target.value)}
                required
              >
                <option value="">Chọn đồ uống</option>

                <option value="Latte">Latte</option>

                <option value="Americano">Americano</option>

                <option value="Cappuccino">Cappuccino</option>

                <option value="Espresso">Espresso</option>

                <option value="Mocha">Mocha</option>
              </select>
            </div>

            <div>
              <label className="form-label fw-bold">Kích thước</label>

              <div className="d-flex gap-3 mt-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="kichthuoc"
                    value="Nhỏ"
                    checked={kichthuoc === "Nhỏ"}
                    onChange={(e) => setKichthuoc(e.target.value)}
                  />

                  <label className="form-check-label">Nhỏ</label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="kichthuoc"
                    value="Vừa"
                    checked={kichthuoc === "Vừa"}
                    onChange={(e) => setKichthuoc(e.target.value)}
                  />

                  <label className="form-check-label">Vừa</label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="kichthuoc"
                    value="Lớn"
                    checked={kichthuoc === "Lớn"}
                    onChange={(e) => setKichthuoc(e.target.value)}
                  />

                  <label className="form-check-label">Lớn</label>
                </div>
              </div>

              <div>
                <label className="form-label fw-bold">
                  Trạng thái đơn hàng
                </label>

                <select
                  className="form-select"
                  value={trangthai}
                  onChange={(e) => setTrangthai(e.target.value)}
                  required
                >
                  <option value="Chờ xử lý">Chờ xử lý</option>

                  <option value="Đang pha chế">Đang pha chế</option>

                  <option value="Hoàn thành">Hoàn thành</option>

                  <option value="Đã hủy">Đã hủy</option>
                </select>
              </div>
              <div>
                <label className="form-label fw-bold">Ghi chú đặc biệt</label>
                <textarea
                  className="form-control w-100"
                  placeholder="Ít đường, nóng hơn bình thường,..."
                  value={ghichu}
                  onChange={(e) => setGhichu(e.target.value)}
                />
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

{
  /* <input required />
<input minLength={3} />
<input maxLength={50} />
<input type="text"/>
<input type="number" />
<input type="email"/>
<input pattern="[A-Za-zÀ-ỹ\s]+"/>
<input pattern="[0-9]+" /> 
<input pattern="0[0-9]{9}"/>
*/
}
