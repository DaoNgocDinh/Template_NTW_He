import Row from "./ShipmentRow";

function Card({ items, remove, setEditing }) {
    return (
        <div className="row g-4 p-3">
            {items.map((item) => (
                <div className="col-md-4" key={item.id}>
                    <Row
                        key={item.id}
                        item={item}
                        remove={remove}
                        setEditing={setEditing}
                    />
                </div>
            ))}
        </div>
    );
}

export default Card;