const FoodItem = ({foodCategory}) => {
    const { name, price } = foodCategory?.card?.info;
    return (
        <div className="food-card">
            <div className="food-item-details">
                <div className="food-name">{name}</div>
                <button>Add</button>
            </div>
            <div>₹ {price/100}</div>
        </div>
    );
}

export default FoodItem;