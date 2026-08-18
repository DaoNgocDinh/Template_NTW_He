function Search({ value, onChange }) {
  return (
    <div className="mb-3">
      <input
        id="item-search"
        type="search"
        className="form-control"
        placeholder="Tìm kiếm hoạt động, CLB..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default Search;
