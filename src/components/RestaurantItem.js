import FoodItem from "./FoodItem";

const RestaurantItem = ({menuCategory}) => {
    return (
        (menuCategory.title) &&
            <div>
                <h2>{menuCategory.title} - ({menuCategory?.itemCards?.length})</h2>
                <div>
                    {menuCategory?.itemCards?.length > 0 && menuCategory.itemCards.map((food) => 
                        <FoodItem foodCategory={food} />
                    )}
                </div>
            </div>        
    )
}

export default RestaurantItem;