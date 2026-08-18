function Header() {
    return (
        <div>
            <nav className="navbar navbar-dark rounded-3 border border-2 mt-2 ms-2 me-2">
                <div className="mt-3 mb-3 ms-5">
                    <h3 className="navbar-brand text-black">Quản lý hoạt động ngoại khóa</h3>
                    <label className="text-black">Đăng ký và theo hoạt động</label>
                </div>

                <div className="d-flex gap-3 mt-3 mb-3 me-5">
                    <label className="text-black">Hoạt động</label>
                    <label className="text-black">Sinh viên</label>
                    <label className="text-black">Lịch trình</label>
                    <label className="text-black">Thống kê</label>
                </div>
            </nav>
        </div>
    );
}

export default Header;
