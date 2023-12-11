import { useEffect, useState } from "react";
import Shimmer from "./shimmer/ShimmerBodyUI";
import { RES_MENU_URL } from "../utils/constants";
import { Link, useParams } from "react-router-dom";
import RestaurantItem from "./RestaurantItem";
import ShimmerMenuUI from "./shimmer/ShimmerMenuUI";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [resData, setResData] = useState(null);

    useEffect(() => {
        fetchResMenuData();
    }, [])

    const fetchResMenuData = async () => {
        const data = await fetch(RES_MENU_URL+resId);
        const json = await data.json();
        setResData(json.data);
    }

    if (resData === null) return <ShimmerMenuUI/>;

     const { name, costForTwoMessage, cuisines, cloudinaryImageId, avgRating, sla } = resData?.cards[0]?.card?.card?.info;

     const resFoodCat = resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    return (
        <>
            <Link to="/"><div className="backButton">Back</div></Link>
            <div className="res-menu-card">
                <h1>{name}</h1>
                <p>{cuisines.join(", ")}</p>
                <div className="res-details">
                    <p>{sla.slaString} - {costForTwoMessage}</p>
                    <p className="res-rating">{avgRating}</p>
                </div>
                <div className="vertical-line"></div>
                { resFoodCat.map((item) =>
                    <RestaurantItem menuCategory={item.card.card}/>
                )}
            </div>
        </>
        
    )
}

export default RestaurantMenu;