function Header() {
    return (
        <div>
            <nav className="navbar navbar-dark rounded-3 border border-2 mt-2 ms-2 me-2">
                <div className="mt-3 mb-3 ms-5">
                    <h3 className="navbar-brand text-black">Quản lý đơn hàng cafe</h3>
                    <label className="text-black">Tạo mới, theo dõi và lọc đơn hàng</label>
                </div>

                <div className="d-flex gap-3 mt-3 mb-3 me-5">
                    <label className="text-black">Đơn hàng</label>
                    <label className="text-black">Thực đơn</label>
                    <label className="text-black">Báo cáo</label>
                </div>
            </nav>
        </div>
    );
}

export default Header;
