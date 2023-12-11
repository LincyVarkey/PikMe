import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const {name, cuisines, avgRatingString, cloudinaryImageId } = props.data;
    return (
        <div className="res-card">
            <img className="card-logo" src={CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <div className="res-food-details">
                <h4>{avgRatingString}</h4>
                <h4>38 min</h4>
            </div>
            <div className="res-cuisine">  
                <h4>{cuisines.join(",")}</h4>
            </div>
        </div>
    );
};

export default RestaurantCard;