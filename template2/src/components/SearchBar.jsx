function Search({ value, onChange }) {
  return (
    <div className="mb-3">
      <input
        id="item-search"
        type="search"
        className="form-control"
        placeholder="Tìm kiếm mã đơn, người nhận,..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default Search;
