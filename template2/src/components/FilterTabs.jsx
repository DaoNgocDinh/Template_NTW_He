function Filter({ filters, value, onChange }) {
  return (
    <div className="mb-3">

      <div className="d-flex gap-2 flex-wrap">
        <button
          type="button"
          className={`btn ${value === "" ? "btn-secondary" : "btn-outline-secondary"}`}
          onClick={() => onChange("")}
        >
          Tất cả
        </button>

        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`btn ${
              value === filter
                ? "btn-secondary"
                : "btn-outline-secondary"
            }`}
            onClick={() => onChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;